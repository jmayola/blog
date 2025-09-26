<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Illuminate\Log\log;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        // filter search parameters
        $search = $request->query("search", null);
        if ($search != null) {
            $query = Blog::where('title', 'like', '%' . $search . '%')->orWhere('title', 'like', '%' . $search . '%')->get();
            if ($query->count() > 0) {
                foreach ($query as $blog) {
                    $blog->name = User::where("id", $blog->user_id)->get()[0]->name;
                    return Inertia::render("blog", ['results' => $query]);
                }
            }
        }
        $blogs = Blog::all();
        foreach ($blogs as $blog) {
            $blog->name = User::where("id", $blog->user_id)->get()[0]->name;
        }
        return Inertia::render("blog", ['results' => $blogs]);
    }
    public function id(string $title)
    {
        $blog = Blog::firstWhere("title", $title);
        if ($blog) {
            $blog->name = User::where("id", $blog->user_id)->get()[0]->name;
            return Inertia::render("blogs/ViewBlog", $blog);
        } else {
            return redirect()->route('blog')->with('failure', 'Blog wasn\'t found');
        }
        ;
    }
    public function store(Request $request)
    {
        $request["user_id"] = $request->user()->id;

        if ($request->public == 'on') {
            $request["public"] = true;
        } else {
            $request["public"] = false;

        }
        ;

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

        return redirect()->route('blog')->with('success', 'Blog added successfully!');
    }

    public function add()
    {
        return Inertia::render("blogs/NewBlog");
    }
}
