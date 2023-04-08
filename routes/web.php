<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ProfileController;
use App\Models\Blog;
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
Route::get('/', function () {
    $blogs = Blog::all();
    return Inertia::render('Home', [
        // 'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
        // 'laravelVersion' => Application::VERSION,
        // 'phpVersion' => PHP_VERSION,

        'blogs' => $blogs
    ]);
});

Route::get('/foods/{blog:slug}', function (Blog $blog) {
    // $blog = Blog::find($id);
    return Inertia::render('Public/Single/Index', [
        'blog' => $blog
    ]);
})->name('blog.single');

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

// Dashboard
Route::get('/admin/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('/admin/blogs', BlogController::class)->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
// Dashboard

Route::any('{url}', function () {
    return Inertia::render('PageNotFound');
})->where('url', '.*');

require __DIR__ . '/auth.php';
