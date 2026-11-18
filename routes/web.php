<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
Route::get('/companies', [CompanyController::class, 'index'])->name('companies.index');

Route::get('/{page}', function () {
    return redirect()->route('dashboard');
})->whereIn('page', ['employees', 'attendance', 'payroll', 'leave', 'recruitment', 'performance', 'settings']);
