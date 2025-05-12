<?php

namespace Database\Seeders;

use App\Models\RepairRequest;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'hussein',
            'email' => 'husseinhazem804@gmail.com',
            'password' => bcrypt('12345678'),
        ]);
        RepairRequest::factory()->count(30)->create();
    }
}
