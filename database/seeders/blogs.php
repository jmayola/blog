<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class blogs extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table("blogs")->updateOrInsert([
            'title' => "Laravel + Databases",
            'description' => "How to deploy a database using laravel",
            'body' => "Here is an article of how to deploy databases in laravel",
            'user_id' => "1",
            'image_path' => "/laravel_database.jpeg",
            'public' => true
        ]);
    }
}
