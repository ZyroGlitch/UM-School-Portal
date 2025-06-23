<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendEmail(){
        Mail::raw('Hello John Ford, this is a test 2 email from Laravel.', function($message) {
            $message->to('glitchzyro@gmail.com', 'Glitchzyro')
                ->subject('Mail Facade in Laravel');
            $message->from('j.buliag.530734@umindanao.edu.ph', 'j.buliag.530734@umindanao.edu.ph');
        });
    }
}