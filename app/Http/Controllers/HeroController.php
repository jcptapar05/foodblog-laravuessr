<?php

namespace App\Http\Controllers;

use App\Models\Hero;
use App\Http\Requests\StoreHeroRequest;
use App\Http\Requests\UpdateHeroRequest;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class HeroController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Hero/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreHeroRequest $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        ]);

        $image_path = '';

        $image_path = time() . '.' . $request->image->getClientOriginalExtension();
        $request->image->move(public_path('/storage/image'), $image_path);

        Hero::create([
            'name' => $request->name,
            'image' => $image_path,
        ]);

        return redirect()->route('blogs.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Hero $hero)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Hero $hero)
    {
        return Inertia::render('Hero/Edit', [
            "hero" => $hero
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHeroRequest $request, Hero $hero)
    {
        $image = $hero->image;
        if ($request->hasFile('image')) {
            Storage::delete('public/storage/image' . $hero->image);

            $image = time() . '.' . $request->image->getClientOriginalExtension();
            $request->image->move(public_path('/storage/image'), $image);
        }

        $hero->update([
            'name' => $request->name,
            'image' => $image,
        ]);

        return redirect()->route('hero.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Hero $hero)
    {
        //
    }
}
