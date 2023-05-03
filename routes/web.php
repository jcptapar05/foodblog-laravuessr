<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\HeroController;
use App\Http\Controllers\ProfileController;
use App\Models\Blog;
use App\Models\Hero;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Public
// Home
Route::get('/', function () {
    // $blogs = Blog::all();

    $blogs = Blog::latest()->take(4)->get();

    $hero = Hero::all();
    
    return Inertia::render('Public/Home/Home', [
        // 'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
        // 'laravelVersion' => Application::VERSION,
        // 'phpVersion' => PHP_VERSION,
        'hero' => $hero,
        'blogs' => $blogs
    ]);
});

// Single Blog
Route::get('/foods/{blog:slug}', function (Blog $blog) {
    return Inertia::render('Public/Single/Index', [
        'blog' => $blog
    ]);
})->name('blog.single');

// Foods
Route::get('/foods', function (Request $request) {
    // $blogs = Blog::all();

    $blogs = Blog::query()
        ->when(Request::input('search'), function ($query, $search) {
            $query->where('name', 'like', "%{$search}%");
        })->paginate(12)
        ->withQueryString();

    return Inertia::render('Public/Foods/Index', [
        'blogs' => $blogs,

        'filters' => Request::only(['search']),
    ]);
});

// Admin
// Dashboard
Route::get('/admin/dashboard', function () {
    return Inertia::render('Dashboard/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('/admin/blogs', BlogController::class)->middleware(['auth', 'verified']);

Route::resource('/admin/hero', HeroController::class)->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
// Dashboard

// Route::any('{url}', function () {
//     return Inertia::render('PageNotFound');
// })->where('url', '.*');

require __DIR__ . '/auth.php';
