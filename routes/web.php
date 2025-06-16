<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SideBarController;
use App\Http\Controllers\UserManagementController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::post('/authentication', [AuthController::class,'authentication'])
->name('authentication');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard',[SideBarController::class,'dashboard'])
    ->name('dashboard');
    
    Route::get('/user_management',[SideBarController::class,'user_management'])
    ->name('sidebar.user_management');

    Route::get('/user_management/add_user',[UserManagementController::class,'add_user'])
    ->name('user_management.add_user');

    Route::get('/subject_management',[SideBarController::class,'subject_management'])
    ->name('sidebar.subject_management');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';