<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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
                $search = $request->string('search')->toString();
                $query->where(function ($subQuery) use ($search) {
                    $subQuery->where('title', 'like', '%' . $search . '%')
                        ->orWhere('author', 'like', '%' . $search . '%')
                        ->orWhere('slug', 'like', '%' . $search . '%');
                });
            })
            ->latest()
            ->paginate($limit)
            ->withQueryString();

        return response()->json([
            'success' => true,
            'message' => 'Books fetched',
            'data' => collect($books->items())->map(function (Book $book) {
                return [
                    'id' => $book->id,
                    'title' => $book->title,
                    'slug' => $book->slug,
                    'author' => $book->author,
                    'description' => $book->description,
                    'price' => (float) $book->price,
                    'cover' => $book->cover,
                    'stock' => $book->stock,
                    'status' => $book->stock > 0 ? 'Active' : 'Draft',
                    'created_at' => $book->created_at?->toISOString(),
                ];
            })->values(),
            'meta' => [
                'current_page' => $books->currentPage(),
                'per_page' => $books->perPage(),
                'total' => $books->total(),
                'last_page' => $books->lastPage(),
            ],
        ]);
    }
}
