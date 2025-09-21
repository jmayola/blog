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
        foreach ($blogs as $blog){
            $blog->name = User::where("id",$blog->user_id)->get()[0]->name;
        }
        return Inertia::render("blog",['results'=>$blogs]);
    }

    public function store(Request $request)
      {

        Blog::create($request->validate([
            'body' => ['required', 'max:3000'],
            'description' => ['max:300'],
            'email' => ['required', 'max:50', 'email'],
            'image' => ['required','image','mimes:jpeg,png,jpg,gif','max:2048'], // Max 2MB
        ]));

        $request->file('image')->store('images', 'public');

        return redirect()->route('blog')->with('success', 'Image uploaded successfully!');
    }
}
