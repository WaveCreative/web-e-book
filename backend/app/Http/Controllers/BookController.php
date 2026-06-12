<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $limit = (int) $request->integer('limit', 10);
        $limit = $limit > 0 ? min($limit, 50) : 10;

        $books = Book::query()
            ->when($request->filled('search'), function ($query) use ($request) {
                $query->where('title', 'like', '%' . $request->string('search')->toString() . '%');
            })
            ->latest()
            ->paginate($limit)
            ->withQueryString();

        return response()->json([
            'success' => true,
            'message' => 'Books fetched',
            'data' => $books->items(),
            'meta' => [
                'current_page' => $books->currentPage(),
                'per_page' => $books->perPage(),
                'total' => $books->total(),
                'last_page' => $books->lastPage(),
            ],
        ]);
    }

    public function show(Book $book): JsonResponse
    {
        return response()->json([
            'success' => true,
            'message' => 'Book detail fetched',
            'data' => $book,
        ]);
    }
}
