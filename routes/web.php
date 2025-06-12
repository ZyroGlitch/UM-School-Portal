<?php

use App\Http\Controllers\SideBarController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard',[SideBarController::class,'dashboard'])
    ->name('dashboard');
    
    Route::get('/core-values',[SideBarController::class,'coreValues'])
    ->name('sidebar.core-values');

    Route::get('/enroll',[SideBarController::class,'enroll'])
    ->name('sidebar.enroll');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';