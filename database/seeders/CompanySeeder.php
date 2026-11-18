<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Company::factory()->create([
            'name' => 'Peoplix HQ',
            'code' => 'HQ',
        ]);

        Company::factory()->create([
            'name' => 'Peoplix Bandung',
            'code' => 'BDG',
        ]);
    }
}
