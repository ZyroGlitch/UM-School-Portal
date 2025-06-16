<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SideBarController extends Controller
{
    public function dashboard()  {
        return Inertia::render('dashboard');
    }
    
    public function user_management()  {
        return Inertia::render('User_Management/Index');
    }

    public function subject_management()  {
        return Inertia::render('Subject_Management/Index');
    }
}