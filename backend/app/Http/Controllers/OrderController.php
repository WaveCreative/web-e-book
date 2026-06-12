<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckoutRequest;
use App\Models\Book;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Voucher;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Throwable;

class OrderController extends Controller
{
    public function checkout(CheckoutRequest $request): JsonResponse
    {
        $validated = $request->validated();
        $user = auth()->user();

        $cart = $user->cart()->with('items.book')->first();

        if (!$cart || $cart->items->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'Cart is empty',
                'errors' => null,
            ], 422);
        }

        DB::beginTransaction();

        try {
            $subtotal = 0;
            $cartBooks = [];

            foreach ($cart->items as $item) {
                $book = Book::whereKey($item->book_id)->lockForUpdate()->first();

                if (!$book) {
                    DB::rollBack();

                    return response()->json([
                        'success' => false,
                        'message' => 'Book not found',
                        'errors' => null,
                    ], 404);
                }

                if ($book->stock < $item->qty) {
                    DB::rollBack();

                    return response()->json([
                        'success' => false,
                        'message' => 'Stock not enough',
                        'errors' => null,
                    ], 422);
                }

                $cartBooks[] = $book;
                $subtotal += (float) $book->price * $item->qty;
            }

            $voucher = null;
            $discountAmount = 0;

            if (!empty($validated['voucher_code'])) {
                $voucher = Voucher::where('code', $validated['voucher_code'])->first();

                if (!$voucher) {
                    DB::rollBack();

                    return response()->json([
                        'success' => false,
                        'message' => 'Invalid voucher',
                        'errors' => null,
                    ], 422);
                }

                if (!$voucher->is_active) {
                    DB::rollBack();

                    return response()->json([
                        'success' => false,
                        'message' => 'Voucher inactive',
                        'errors' => null,
                    ], 422);
                }

                if ($voucher->expired_at && now()->greaterThan($voucher->expired_at)) {
                    DB::rollBack();

                    return response()->json([
                        'success' => false,
                        'message' => 'Voucher expired',
                        'errors' => null,
                    ], 422);
                }

                if ($subtotal < (float) $voucher->min_purchase) {
                    DB::rollBack();

                    return response()->json([
                        'success' => false,
                        'message' => 'Minimum purchase not reached',
                        'errors' => null,
                    ], 422);
                }

                $discountAmount = ($subtotal * $voucher->discount_percent) / 100;

                if ($voucher->max_discount !== null && $discountAmount > (float) $voucher->max_discount) {
                    $discountAmount = (float) $voucher->max_discount;
                }
            }

            $finalPrice = $subtotal - $discountAmount;

            $order = Order::create([
                'user_id' => $user->id,
                'voucher_id' => $voucher?->id,
                'total_price' => $subtotal,
                'discount_amount' => $discountAmount,
                'final_price' => $finalPrice,
                'status' => 'pending',
            ]);

            foreach ($cart->items as $index => $item) {
                $book = $cartBooks[$index];
                $book->decrement('stock', $item->qty);

                OrderItem::create([
                    'order_id' => $order->id,
                    'book_id' => $book->id,
                    'price' => $book->price,
                    'qty' => $item->qty,
                ]);
            }

            $cart->items()->delete();

            DB::commit();

            $order->load('items.book', 'voucher');

            return response()->json([
                'success' => true,
                'message' => 'Order created',
                'data' => $this->orderPayload($order),
            ], 201);
        } catch (Throwable $e) {
            DB::rollBack();

            return response()->json([
                'success' => false,
                'message' => 'Failed to create order',
                'errors' => null,
            ], 500);
        }
    }

    public function index(): JsonResponse
    {
        $limit = request()->integer('limit', 10);
        $limit = $limit > 0 ? min($limit, 50) : 10;
        $status = request()->string('status')->toString();

        $orders = auth()->user()
            ->orders()
            ->when($status !== '', function ($query) use ($status) {
                $query->where('status', $status);
            })
            ->with('items.book', 'voucher')
            ->latest()
            ->paginate($limit)
            ->withQueryString();

        return response()->json([
            'success' => true,
            'message' => 'Orders fetched',
            'data' => collect($orders->items())->map(fn (Order $order) => $this->orderSummary($order))->values(),
            'meta' => [
                'current_page' => $orders->currentPage(),
                'per_page' => $orders->perPage(),
                'total' => $orders->total(),
                'last_page' => $orders->lastPage(),
            ],
        ]);
    }

    public function pay(Order $order): JsonResponse
    {
        if ($order->user_id !== auth()->id()) {
            return response()->json([
                'success' => false,
                'message' => 'Forbidden',
                'errors' => null,
            ], 403);
        }

        if ($order->status !== 'pending') {
            return response()->json([
                'success' => false,
                'message' => 'Order cannot be paid',
                'errors' => null,
            ], 422);
        }

        $order->update([
            'status' => 'paid',
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Order paid',
            'data' => [
                'id' => $order->id,
                'status' => $order->status,
            ],
        ]);
    }

    public function show(Order $order): JsonResponse
    {
        if ($order->user_id !== auth()->id()) {
            return response()->json([
                'success' => false,
                'message' => 'Forbidden',
                'errors' => null,
            ], 403);
        }

        $order->load('items.book', 'voucher');

        return response()->json([
            'success' => true,
            'message' => 'Order detail fetched',
            'data' => $this->orderPayload($order),
        ]);
    }

    public function cancel(Order $order): JsonResponse
    {
        if ($order->user_id !== auth()->id()) {
            return response()->json([
                'success' => false,
                'message' => 'Forbidden',
                'errors' => null,
            ], 403);
        }

        if ($order->status !== 'pending') {
            return response()->json([
                'success' => false,
                'message' => 'Order cannot be cancelled',
                'errors' => null,
            ], 422);
        }

        DB::beginTransaction();

        try {
            $order->load('items');

            foreach ($order->items as $item) {
                $book = Book::whereKey($item->book_id)->lockForUpdate()->first();

                if ($book) {
                    $book->increment('stock', $item->qty);
                }
            }

            $order->update([
                'status' => 'cancelled',
            ]);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Order cancelled',
                'data' => [
                    'id' => $order->id,
                    'status' => $order->status,
                ],
            ]);
        } catch (Throwable $e) {
            DB::rollBack();

            return response()->json([
                'success' => false,
                'message' => 'Failed to cancel order',
                'errors' => null,
            ], 500);
        }
    }

    private function orderPayload(Order $order): array
    {
        return [
            'id' => $order->id,
            'user_id' => $order->user_id,
            'voucher_id' => $order->voucher_id,
            'total_price' => (float) $order->total_price,
            'discount_amount' => (float) $order->discount_amount,
            'final_price' => (float) $order->final_price,
            'status' => $order->status,
            'items' => $order->items->map(function ($item) {
                return [
                    'id' => $item->id,
                    'book_id' => $item->book_id,
                    'title' => $item->book?->title,
                    'price' => (float) $item->price,
                    'qty' => $item->qty,
                    'subtotal' => (float) $item->price * $item->qty,
                ];
            })->values(),
            'created_at' => $order->created_at?->toISOString(),
        ];
    }

    private function orderSummary(Order $order): array
    {
        return [
            'id' => $order->id,
            'total_price' => (float) $order->total_price,
            'discount_amount' => (float) $order->discount_amount,
            'final_price' => (float) $order->final_price,
            'status' => $order->status,
            'created_at' => $order->created_at?->toISOString(),
        ];
    }
}
