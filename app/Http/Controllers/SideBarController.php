<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SideBarController extends Controller
{
    public function dashboard()  {
        return Inertia::render('dashboard');
    }
    
    public function coreValues()  {
        return Inertia::render('CoreValues/Index');
    }

    public function enroll()  {
        return Inertia::render('Enroll/Index');
    }
}