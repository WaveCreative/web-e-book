<?php

namespace App\Http\Requests;

class CheckoutRequest extends ApiFormRequest
{
    public function rules(): array
    {
        return [
            'voucher_code' => ['nullable', 'string', 'max:100'],
        ];
    }
}
