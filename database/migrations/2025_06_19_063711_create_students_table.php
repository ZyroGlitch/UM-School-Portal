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
        Schema::create('students', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->unsignedBigInteger('student_id',6)->primary()->unique();
            $table->string('firstname');
            $table->string('middlename');
            $table->string('surname');
            $table->integer('age');
            $table->string('birth_place');
            $table->string('birth_date');
            $table->string('sex',10);
            $table->string('year_level');
            $table->string('department');
            $table->string('program');
            $table->string('status')->default('Unenrolled'); // enrolled, unenrolled, graduated, etc.
            $table->string('profile_img')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};