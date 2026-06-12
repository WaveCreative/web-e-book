<?php

namespace App\Http\Requests;

class UpdateCartItemRequest extends ApiFormRequest
{
    public function rules(): array
    {
        return [
            'qty' => ['required', 'integer', 'min:1'],
        ];
    }
}
