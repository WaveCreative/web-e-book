<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class SummaryController extends Controller
{
    public function index(): JsonResponse
    {
        $recentOrders = Order::query()
            ->with('user')
            ->latest()
            ->limit(5)
            ->get()
            ->map(function (Order $order) {
                return [
                    'id' => $order->id,
                    'user_name' => $order->user?->name,
                    'user_email' => $order->user?->email,
                    'status' => $order->status,
                    'final_price' => (float) $order->final_price,
                    'created_at' => $order->created_at?->toISOString(),
                ];
            })
            ->values();

        return response()->json([
            'success' => true,
            'message' => 'Admin summary fetched',
            'data' => [
                'users_total' => User::count(),
                'books_total' => Book::count(),
                'active_books_total' => Book::where('stock', '>', 0)->count(),
                'orders_total' => Order::count(),
                'paid_orders_total' => Order::where('status', 'paid')->count(),
                'pending_orders_total' => Order::where('status', 'pending')->count(),
                'revenue_total' => (float) Order::where('status', 'paid')->sum('final_price'),
                'recent_orders' => $recentOrders,
            ],
        ]);
    }
}
