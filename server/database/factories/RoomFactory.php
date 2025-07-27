<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Street;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Room>
 */
class RoomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::inRandomOrder()->first()->id ?? 1,
            'title' => fake()->sentence(),
            'description' => fake()->paragraph(),
            'price' => fake()->numberBetween(1000000, 5000000),
            'electricity_price' => 3500,
            'water_price' => 10000,
            'address_detail' => fake()->address(),
            'street_id' => Street::inRandomOrder()->first()?->id ?? null,
            'google_map_link' => fake()->url(),
            'is_approved' => fake()->boolean(),
            'status' => fake()->boolean(),
        ];
    }
}
