<?php

namespace App\Http\Controllers;

use App\Models\Professor;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SideBarController extends Controller
{
    public function dashboard()  {
        return Inertia::render('dashboard');
    }
    
    public function user_management($role)  {
        if($role === 'students'){
            $students = Student::latest()->get();

            return Inertia::render('User_Management/Index', [
                'students' => $students,
                'activeTab' => 'students',
            ]);
        }else{
            $professors = Professor::latest()->get();

            return Inertia::render('User_Management/Index', [
                'professors' => $professors,
                'activeTab' => 'professors',
            ]);
        }
    }

    public function subject_management()  {
        return Inertia::render('Subject_Management/Index');
    }
}