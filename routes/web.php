<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

Route::get('/{page}', function () {
    return redirect()->route('dashboard');
})->whereIn('page', ['employees', 'attendance', 'payroll', 'leave', 'recruitment', 'performance', 'settings']);
