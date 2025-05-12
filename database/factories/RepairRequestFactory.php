<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Requests>
 */
class RepairRequestFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'description' => fake()->realText(),
            'status' => fake()->randomElement(['pending','in_progress','complete']),
            'image_url' => fake()->imageUrl(),
            'due_date' => fake()->dateTimeBetween('now','+1 year'),
            'tracker' => fake()->randomElement(['10%','20%','40%','50%','60%','70%','80%','90%','100%']),
            'created_by' => 1,
        ];
    }
}
