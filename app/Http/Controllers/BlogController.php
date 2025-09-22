<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::all();
        foreach ($blogs as $blog) {
            $blog->name = User::where("id", $blog->user_id)->get()[0]->name;
        }
        return Inertia::render("blog", ['results' => $blogs]);
    }

    public function store(Request $request)
    {
        $request["user_id"] = $request->user()->id;

        if ($request->public == 'on') {
            $request["public"] = true;
        };

        $validated = $request->validate([
            'body' => ['required', 'max:3000'],
            'description' => ['max:300'],
            'title' => ['required', 'max:300'],
            'public' => ['required', 'boolean'],
            'image_path' => ['required', 'image', 'mimes:jpeg,png,jpg,gif,webp', 'max:2048'],
            'user_id' => ['required']
        ]);

        $path = $request->file('image_path')->store('images', 'public');

        $validated['image_path'] = $path;

        Blog::create($validated);

        return redirect()->route('blog')->with('success', 'Image uploaded successfully!');
    }

    public function add()
    {
        return Inertia::render("blogs/NewBlog");
    }
}
