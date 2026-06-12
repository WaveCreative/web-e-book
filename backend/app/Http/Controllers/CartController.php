<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddCartItemRequest;
use App\Http\Requests\UpdateCartItemRequest;
use App\Models\Book;
use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\JsonResponse;

class CartController extends Controller
{
    public function index(): JsonResponse
    {
        $cart = $this->currentCart()->load('items.book');

        return response()->json([
            'success' => true,
            'message' => 'Cart fetched',
            'data' => $this->cartPayload($cart),
        ]);
    }

    public function store(AddCartItemRequest $request): JsonResponse
    {
        $validated = $request->validated();
        $book = Book::find($validated['book_id']);

        if (!$book) {
            return response()->json([
                'success' => false,
                'message' => 'Book not found',
                'errors' => null,
            ], 404);
        }

        $cart = $this->currentCart();
        $item = CartItem::where('cart_id', $cart->id)
            ->where('book_id', $book->id)
            ->first();

        $currentQty = $item?->qty ?? 0;
        $newQty = $currentQty + $validated['qty'];

        if ($newQty > $book->stock) {
            return response()->json([
                'success' => false,
                'message' => 'Stock not enough',
                'errors' => null,
            ], 422);
        }

        if ($item) {
            $item->update([
                'qty' => $newQty,
            ]);
        } else {
            CartItem::create([
                'cart_id' => $cart->id,
                'book_id' => $book->id,
                'qty' => $validated['qty'],
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Item added to cart',
            'data' => [
                'cart_id' => $cart->id,
                'book_id' => $book->id,
                'qty' => $newQty,
            ],
        ]);
    }

    public function update(UpdateCartItemRequest $request, CartItem $item): JsonResponse
    {
        if ($item->cart->user_id !== auth()->id()) {
            return response()->json([
                'success' => false,
                'message' => 'Forbidden',
                'errors' => null,
            ], 403);
        }

        $validated = $request->validated();

        if ($validated['qty'] > $item->book->stock) {
            return response()->json([
                'success' => false,
                'message' => 'Stock not enough',
                'errors' => null,
            ], 422);
        }

        $item->update([
            'qty' => $validated['qty'],
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Cart item updated',
            'data' => [
                'id' => $item->id,
                'book_id' => $item->book_id,
                'qty' => $item->qty,
            ],
        ]);
    }

    public function destroy(CartItem $item): JsonResponse
    {
        if ($item->cart->user_id !== auth()->id()) {
            return response()->json([
                'success' => false,
                'message' => 'Forbidden',
                'errors' => null,
            ], 403);
        }

        $item->delete();

        return response()->json([
            'success' => true,
            'message' => 'Cart item deleted',
            'data' => null,
        ]);
    }

    private function currentCart(): Cart
    {
        return auth()->user()->cart()->firstOrCreate([
            'user_id' => auth()->id(),
        ]);
    }

    private function cartPayload(Cart $cart): array
    {
        $items = $cart->items->map(function (CartItem $item) {
            return [
                'id' => $item->id,
                'book_id' => $item->book_id,
                'title' => $item->book?->title,
                'price' => $item->book?->price,
                'cover' => $item->book?->cover,
                'qty' => $item->qty,
                'subtotal' => (float) $item->book?->price * $item->qty,
            ];
        })->values();

        return [
            'id' => $cart->id,
            'user_id' => $cart->user_id,
            'items' => $items,
            'total_items' => $items->sum('qty'),
            'subtotal' => $items->sum('subtotal'),
        ];
    }
}
