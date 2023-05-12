<?php

namespace App\Http\Controllers;

use App\Models\Logo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class LogoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Settings/Logo/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'nullable|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        ]);

        $image_path = '';

        $image_path = time() . '.' . $request->image->getClientOriginalExtension();
        $request->image->move(public_path('/storage/image'), $image_path);

        Logo::create([
            'image' => $image_path,
        ]);

        return redirect()->route('admin.settings');
    }

    /**
     * Display the specified resource.
     */
    public function show(Logo $logo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Logo $logo)
    {
        return Inertia::render('Settings/Logo/Edit', [
            "logo" => $logo
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Logo $logo)
    {
        $image = $logo->image;
        if ($request->hasFile('image')) {
            Storage::delete('public/storage/image' . $logo->image);

            $image = time() . '.' . $request->image->getClientOriginalExtension();
            $request->image->move(public_path('/storage/image'), $image);
        }

        $logo->update([
            'image' => $image,
        ]);

        return redirect()->route('admin.settings');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Logo $logo)
    {
        //
    }
}
