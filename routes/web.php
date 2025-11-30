<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('dashboard', [App\Http\Controllers\BlogController::class, "index"]
    )->name('dashboard');
Route::get('/blog', [App\Http\Controllers\BlogController::class, "index"])->name('blog');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/blog/new', [App\Http\Controllers\BlogController::class, "add"])->name('blog.add');
    Route::post('/blog', [App\Http\Controllers\BlogController::class, "store"])->name('blog.store');
});
Route::get('/blog/{title}', [App\Http\Controllers\BlogController::class, "id"])->name('blog.id');


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
