<?php

namespace Tests\Feature;

use App\Models\Company;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class CompaniesTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_lists_companies(): void
    {
        Company::factory()->count(2)->create();

        $this->get(route('companies.index'))
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('companies/Index')
                ->has('companies', 2)
            );
    }
}
