<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function __construct()
    {

    }
    public function validation($data){
        return $data->validate([
            "name"=>["string","required","min:3","max:50"],
            "email"=>["string","required","email","min:5"],
            "description"=>["string","min:3","max:250","nullable"],
            "project_type"=>["string","required","min:5","max:13"],
            "interested_in"=> ["string","required","min:5","max:13"],
        ]);
    }
    public function store(Request $req){
        $data=$this->validation($req);
        Contact::create($data);
        return response()->json(["success"=>true]);
    }
}
