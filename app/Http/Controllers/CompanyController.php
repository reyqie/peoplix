<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Inertia\Inertia;

class CompanyController extends Controller
{
    public function index()
    {
        return Inertia::render('companies/Index', [
            'companies' => Company::query()
                ->orderBy('name')
                ->get(['id', 'name', 'code', 'is_active']),
        ]);
    }
}
