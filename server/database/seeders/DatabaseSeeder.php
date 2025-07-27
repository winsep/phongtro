<?php

namespace Database\Seeders;

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
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            CitySeeder::class,
            DistrictSeeder::class,
            WardSeeder::class,
            StreetSeeder::class,
            RoomUtilitySeeder::class,
            RoomSeeder::class,
            RoomImageSeeder::class,
            RoomRentalSeeder::class,
            RoomUtilityRoomSeeder::class,
            InvoiceSeeder::class,
            PaymentSeeder::class,
            ReportSeeder::class,
            NotificationSeeder::class,
            ChatSeeder::class,
        ]);
    }

}
