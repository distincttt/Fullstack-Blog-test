<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        return Article::with('comments')->get();
    }

    public function show($id)
    {
        return Article::with('comments')->findOrFail($id);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $article = Article::create($validated);
        return response()->json($article, 201);
    }

    public function addComment(Request $request, $id)
    {
        $article = Article::findOrFail($id);

        $validated = $request->validate([
            'author_name' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $comment = $article->comments()->create($validated);
        return response()->json($comment, 201);
    }
}

