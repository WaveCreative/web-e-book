<?php

namespace App\Http\Requests;

class GoogleAuthRequest extends ApiFormRequest
{
    public function rules(): array
    {
        return [
            'google_token' => ['required', 'string'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'avatar' => ['nullable', 'url', 'max:2048'],
        ];
    }
}
