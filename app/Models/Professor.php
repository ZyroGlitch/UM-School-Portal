<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Professor extends Model
{
    protected $fillable = [
        'user_id',
        'firstname',
        'middlename',
        'surname',
        'age',
        'birth_place',
        'birth_date',
        'sex',
        'department',
        'date_hired',
        'status',
        'profile_img',
    ];
}