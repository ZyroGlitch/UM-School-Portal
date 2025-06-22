<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    public function authentication(Request $request){
        // dd($request);
        $fields = $request->validate([
            'email' => 'required|email',
            'password' => [
                'required',
                'string',
                Password::min(8)
                ->letters()
                ->mixedCase()
                ->numbers()
                ->symbols(),
            ],
        ]);

        if(auth()->attempt($fields)){
            $request->session()->regenerate();

            $user = auth()->user();

            if($user->role === 'Admin'){
                return redirect()->route('dashboard');
            }else{
                return redirect()->back();
            }
        }

        return redirect()->back()->with('error','Invalid email or password.');
    }
}