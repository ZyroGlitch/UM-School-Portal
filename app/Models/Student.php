<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'user_id',
        'student_id',
        'firstname',
        'middlename',
        'surname',
        'age',
        'birth_place',
        'birth_date',
        'sex',
        'year_level',
        'department',
        'program',
        'status',
        'profile_img',
    ];
}