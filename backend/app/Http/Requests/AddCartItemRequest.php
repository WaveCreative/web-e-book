<?php

namespace App\Http\Requests;

class AddCartItemRequest extends ApiFormRequest
{
    public function rules(): array
    {
        return [
            'book_id' => ['required', 'integer', 'exists:books,id'],
            'qty' => ['required', 'integer', 'min:1'],
        ];
    }
}
