<?php

namespace App\Http\Requests;

class ApplyVoucherRequest extends ApiFormRequest
{
    public function rules(): array
    {
        return [
            'code' => ['required', 'string', 'max:100'],
        ];
    }
}
