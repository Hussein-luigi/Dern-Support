<?php

use App\Http\Controllers\Admin\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Admin\Auth\RegisteredUserController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::prefix("admin")->middleware('guest:admin')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])->name('admin.register');
    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])->name('admin.login');
    Route::post('login', [AuthenticatedSessionController::class, 'store']);
});

Route::prefix("admin")->middleware('auth:admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('AdminAuth/Dashboard');
    })->name('AdminAuth.dashboard');
    Route::resource('Repair', AdminController::class);
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('AdminAuth.logout');
});
