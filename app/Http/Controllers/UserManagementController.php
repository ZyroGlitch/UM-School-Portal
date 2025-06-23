<?php

namespace App\Http\Controllers;

use App\Models\Professor;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
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
            'email' => $firstname_lowerCase . '.' . $lastname_lowerCase . '.' . $idNumber . '@sksu.edu.ph',
            'password' => Hash::make($fields['lastname']. $firstname_lowerCase . '$' . $idNumber),
            'role' => 'Student',
        ]);
    
        $student = Student::create([
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

        if($student){
            $data = [
                'name' => $student->firstname . ' ' . $student->lastname,
                'email' => $new_user->email,
                'student_id' => $idNumber,
                'password' => $fields['lastname'] . $firstname_lowerCase . '$' . $idNumber,
                'role' => 'Student',
            ];

            Mail::send('email_template',$data, function($message) {
                $message->to('glitchzyro@gmail.com', 'Glitchzyro')
                    ->subject('Sultan Kudarat State University - Student Account');
                $message->from('j.buliag.530734@umindanao.edu.ph', 'SKSU - Administration');
            });
            

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
            'email' => $firstname_lowerCase . '.' . $lastname_lowerCase . '.' . $idNumber . '@sksu.edu.ph',
            'password' => Hash::make($fields['lastname'] . $firstname_lowerCase . '$' . $idNumber),
            'role' => 'Professor',
        ]);
    
        $professor = Professor::create([
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

        if($professor){
            $data = [
                'name' => $professor->firstname . ' ' . $professor->lastname,
                'email' => $new_user->email,
                'student_id' => '',
                'password' => $fields['lastname'] . $firstname_lowerCase . '$' . $idNumber,
                'role' => 'Professor',
            ];

            Mail::send('email_template',$data, function($message) {
                $message->to('glitchzyro@gmail.com', 'Glitchzyro')
                    ->subject('Sultan Kudarat State University - Professor Account');
                $message->from('j.buliag.530734@umindanao.edu.ph', 'SKSU - Administration');
            });

            return redirect()->route('user_management.add_professor')
            ->with('success', 'Professor information added successfully!');
        } else {
            return redirect()->back()
            ->with('error', 'Failed to add the professor information.');
        }
    }
}