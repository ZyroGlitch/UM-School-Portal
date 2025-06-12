<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('enrolls', function (Blueprint $table) {
            $table->id();
            $table->string('code',5)->unique();
            $table->string('title',25)->unique();
            $table->string('description',255)->unique();
            $table->decimal(8,1);
            $table->string('day',25);
            $table->string('term',25);
            $table->string('time',25);
            $table->string('room',25);
            $table->string('program',25);
            $table->string('status',25);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enrolls');
    }
};