<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles  = ['Admin', 'Staff', 'Client'];

        Role::truncate();

        foreach ($roles as $role) {
            Role::create(['name' => $role]);
        }
    }
}
