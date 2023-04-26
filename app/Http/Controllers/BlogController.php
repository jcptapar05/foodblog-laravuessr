<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Http\Requests\StoreblogRequest;
use App\Http\Requests\UpdateblogRequest;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

use function Termwind\render;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::all();
        return Inertia::render('Blog/Index', [
            'blogs' => $blogs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Blog/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreblogRequest $request)
    {
        // dd($request);
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required',
            'receipts' => 'required',
            'image' => 'nullable|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
            'video' => 'required',
            'instructions' => 'required',
            'categories' => 'required'
        ]);

        $image_path = '';
        // if ($request->hasFile('image')) {
        //     $image_path = $request->file('image')->store('image', 'public');
        // }

        $image_path = time() . '.' . $request->image->getClientOriginalExtension();
        $request->image->move(public_path('/storage/image'), $image_path);

        Blog::create([
            'name' => $request->name,
            'description' => $request->description,
            'receipts' => $request->receipts,
            'image' => $image_path,
            'video' => $request->video,
            'instructions' => $request->instructions,
            'categories' => $request->categories,
            'slug' => Str::slug($request->name),
        ]);

        return redirect()->route('blogs.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(blog $blog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(blog $blog)
    {
        return Inertia::render('Blog/Edit', [
            "blog" => $blog
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateblogRequest $request, blog $blog)
    {

        $image = $blog->image;
        if ($request->hasFile('image')) {
            Storage::delete('public/storage/image' . $blog->image);
            // $image = $request->file('image')->store('image', 'public');

            $image = time() . '.' . $request->image->getClientOriginalExtension();
            $request->image->move(public_path('/storage/image'), $image);
        }

        $blog->update([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'description' => $request->description,
            'receipts' => $request->receipts,
            'image' => $image,
            'video' => $request->video,
            'instructions' => $request->instructions,
            'categories' => $request->categories
        ]);

        return redirect()->route('blogs.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(blog $blog)
    {
        $blog->delete();
        return redirect()->back();
    }
}
