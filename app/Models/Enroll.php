<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Enroll extends Model
{
    protected $fillable = [
        'code',
        'title',
        'description',
        'units',
        'day',
        'term',
        'time',
        'room',
        'program',
        'status'
    ];

}