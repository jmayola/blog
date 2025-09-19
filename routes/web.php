<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/blog', function () {
    return Inertia::render('blog');
})->name('blog');

Route::get('/suma', function(){
    return Inertia::render('suma');
})->name("suma");

Route::post('/suma', function(Request $request){
    return Inertia::render('suma');
})->name("sumatoria");

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
