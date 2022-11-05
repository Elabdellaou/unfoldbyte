<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function __construct()
    {

    }
    public function drive(){
        return view('project.drive');
    }
}
