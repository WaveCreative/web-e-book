<?php

namespace App\Http\Controllers;

use App\Http\Requests\ApplyVoucherRequest;
use App\Models\Voucher;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;

class VoucherController extends Controller
{
    public function apply(ApplyVoucherRequest $request): JsonResponse
    {
        $validated = $request->validated();
        $voucher = Voucher::where('code', $validated['code'])->first();

        if (!$voucher) {
            return response()->json([
                'success' => false,
                'message' => 'Voucher not found',
                'errors' => null,
            ], 404);
        }

        if (!$voucher->is_active) {
            return response()->json([
                'success' => false,
                'message' => 'Voucher inactive',
                'errors' => null,
            ], 422);
        }

        if ($voucher->expired_at && Carbon::parse($voucher->expired_at)->isPast()) {
            return response()->json([
                'success' => false,
                'message' => 'Voucher expired',
                'errors' => null,
            ], 422);
        }

        $cart = auth()->user()->cart()->with('items.book')->first();

        if (!$cart || $cart->items->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'Cart is empty',
                'errors' => null,
            ], 422);
        }

        $subtotal = $cart->items->sum(function ($item) {
            return (float) $item->book->price * $item->qty;
        });

        if ($subtotal < (float) $voucher->min_purchase) {
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

        return response()->json([
            'success' => true,
            'message' => 'Voucher applied',
            'data' => [
                'code' => $voucher->code,
                'discount_percent' => $voucher->discount_percent,
                'discount_amount' => $discountAmount,
                'subtotal' => $subtotal,
                'final_total' => $subtotal - $discountAmount,
            ],
        ]);
    }
}
