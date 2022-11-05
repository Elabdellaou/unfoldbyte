<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function __construct()
    {

    }
    public function drive(){
        return view('product.drive');
    }
}
