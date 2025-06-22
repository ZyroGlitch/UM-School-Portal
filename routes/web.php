<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SideBarController;
use App\Http\Controllers\UserManagementController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index');
})->name('home');

Route::post('/authentication', [AuthController::class,'authentication'])
->name('authentication');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard',[SideBarController::class,'dashboard'])
    ->name('dashboard');
    
    // ----------------------------------------------------------------------

    Route::get('/user_management/role/{role}',[SideBarController::class,'user_management'])
    ->name('sidebar.user_management');

    Route::get('/user_management/add_student',[UserManagementController::class,'add_student'])
    ->name('user_management.add_student');

    Route::post('/user_management/add_student/store',[UserManagementController::class,'store_student'])
    ->name('user_management.store_student');

    Route::get('/user_management/add_professor',[UserManagementController::class,'add_professor'])
    ->name('user_management.add_professor');

    Route::post('/user_management/add_professor/store',[UserManagementController::class,'store_professor'])
    ->name('user_management.store_professor');
    
     // ----------------------------------------------------------------------

    Route::get('/subject_management',[SideBarController::class,'subject_management'])
    ->name('sidebar.subject_management');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';