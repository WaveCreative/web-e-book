<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $limit = (int) $request->integer('limit', 10);
        $limit = $limit > 0 ? min($limit, 50) : 10;

        $orders = Order::query()
            ->with('user', 'items.book', 'voucher')
            ->when($request->filled('search'), function ($query) use ($request) {
                $search = $request->string('search')->toString();
                $query->where(function ($subQuery) use ($search) {
                    $subQuery->whereRaw('CAST(id AS CHAR) LIKE ?', ['%' . $search . '%'])
                        ->orWhereHas('user', function ($userQuery) use ($search) {
                            $userQuery->where('name', 'like', '%' . $search . '%')
                                ->orWhere('email', 'like', '%' . $search . '%');
                        });
                });
            })
            ->when($request->filled('status'), function ($query) use ($request) {
                $query->where('status', $request->string('status')->toString());
            })
            ->latest()
            ->paginate($limit)
            ->withQueryString();

        return response()->json([
            'success' => true,
            'message' => 'Orders fetched',
            'data' => collect($orders->items())->map(function (Order $order) {
                $primaryItem = $order->items->first();
                $primaryBook = $primaryItem?->book;

                return [
                    'id' => $order->id,
                    'user_name' => $order->user?->name,
                    'user_email' => $order->user?->email,
                    'total_price' => (float) $order->total_price,
                    'discount_amount' => (float) $order->discount_amount,
                    'final_price' => (float) $order->final_price,
                    'status' => ucfirst($order->status),
                    'items_count' => $order->items->count(),
                    'primary_book' => $primaryBook ? [
                        'title' => $primaryBook->title,
                        'author' => $primaryBook->author,
                    ] : null,
                    'created_at' => $order->created_at?->toISOString(),
                ];
            })->values(),
            'meta' => [
                'current_page' => $orders->currentPage(),
                'per_page' => $orders->perPage(),
                'total' => $orders->total(),
                'last_page' => $orders->lastPage(),
            ],
        ]);
    }

    public function show(Order $order): JsonResponse
    {
        $order->load('user', 'items.book', 'voucher');

        return response()->json([
            'success' => true,
            'message' => 'Order detail fetched',
            'data' => [
                'id' => $order->id,
                'user_name' => $order->user?->name,
                'user_email' => $order->user?->email,
                'total_price' => (float) $order->total_price,
                'discount_amount' => (float) $order->discount_amount,
                'final_price' => (float) $order->final_price,
                'status' => ucfirst($order->status),
                'created_at' => $order->created_at?->toISOString(),
                'items' => $order->items->map(function ($item) {
                    return [
                        'id' => $item->id,
                        'book_id' => $item->book_id,
                        'title' => $item->book?->title,
                        'price' => (float) $item->price,
                        'qty' => $item->qty,
                    ];
                })->values(),
            ],
        ]);
    }
}
