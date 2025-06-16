<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserManagementController extends Controller
{
    public function add_user(){
        return Inertia::render('User_Management/AddUser');
    }
}