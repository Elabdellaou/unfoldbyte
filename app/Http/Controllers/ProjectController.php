<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function __construct()
    {

    }
    public function Optic(){
        return view('project.optic');
    }
    public function SelfEducation(){
        return view('project.education');
    }
    public function Point(){
        return view('project.point');
    }
}
