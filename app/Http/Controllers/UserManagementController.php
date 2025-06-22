<?php

namespace App\Http\Controllers;

use App\Models\Professor;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Str;

class UserManagementController extends Controller
{
    public function add_student(){
        return Inertia::render('User_Management/AddStudent');
    }

    public function store_student(Request $request){
        // dd($request);
        
        $fields = $request->validate([
            'firstname' => 'required|string',
            'middlename' => 'required|string',
            'lastname' => 'required|string',
            'age' => 'required|integer',
            'birth_place' => 'required|string',
            'birthdate' => 'required|date',
            'sex' => 'required|string',
            'year' => 'required|string',
            'department' => 'required|string',
            'program' => 'required|string',
        ]);
    
        $idNumber = random_int(100000, 999999); // more secure

        // Sanitize firstname and lastname: lowercase + no spaces
        $firstname_lowerCase = strtolower(str_replace(' ', '', $fields['firstname']));
        $lastname_lowerCase = strtolower(str_replace(' ', '', $fields['lastname']));
    
        $new_user = User::create([
            'email' => $firstname_lowerCase . '.' . $lastname_lowerCase . '.' . $idNumber . '@gmail.com',
            'password' => Hash::make($fields['lastname'] . '$' . $idNumber),
            'role' => 'Student',
        ]);
    
        $store = Student::create([
            'user_id' => $new_user->id,
            'student_id' => $idNumber,
            'firstname' => $fields['firstname'],
            'middlename' => $fields['middlename'],
            'surname' => $fields['lastname'],
            'age' => $fields['age'],
            'birth_place' => $fields['birth_place'],
            'birth_date' => $fields['birthdate'],
            'sex' => $fields['sex'],
            'year_level' => $fields['year'],
            'department' => $fields['department'],
            'program' => $fields['program'],
        ]);

        if($store){
            return redirect()->route('user_management.add_student')
            ->with('success', 'Student information added successfully!');
        } else {
            return redirect()->back()
            ->with('error', 'Failed to add the student information.');
        }
    }

    public function add_professor(){
        return Inertia::render('User_Management/AddProfessor');
    }

    public function store_professor(Request $request){
        // dd($request);
        
        $fields = $request->validate([
            'firstname' => 'required|string',
            'middlename' => 'required|string',
            'lastname' => 'required|string',
            'age' => 'required|integer',
            'birth_place' => 'required|string',
            'birthdate' => 'required|date',
            'sex' => 'required|string',
            'department' => 'required|string',
        ]);
    
        $idNumber = random_int(100000, 999999); // more secure

        // Sanitize firstname and lastname: lowercase + no spaces
        $firstname_lowerCase = strtolower(str_replace(' ', '', $fields['firstname']));
        $lastname_lowerCase = strtolower(str_replace(' ', '', $fields['lastname']));
    
        $new_user = User::create([
            'email' => $firstname_lowerCase . '.' . $lastname_lowerCase . '.' . $idNumber . '@gmail.com',
            'password' => Hash::make($fields['lastname'] . '$' . $idNumber),
            'role' => 'Professor',
        ]);
    
        $store = Professor::create([
            'user_id' => $new_user->id,
            'firstname' => $fields['firstname'],
            'middlename' => $fields['middlename'],
            'surname' => $fields['lastname'],
            'age' => $fields['age'],
            'birth_place' => $fields['birth_place'],
            'birth_date' => $fields['birthdate'],
            'sex' => $fields['sex'],
            'department' => $fields['department'],
            'date_hired' => now(),
        ]);

        if($store){
            return redirect()->route('user_management.add_professor')
            ->with('success', 'Professor information added successfully!');
        } else {
            return redirect()->back()
            ->with('error', 'Failed to add the professor information.');
        }
    }
}