<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function __construct()
    {

    }
    public function Optic(){
        return view('product.optic');
    }
    public function Safe(){
        return view("product.safeChat");
    }
    public function Drive(){
        return view("product.drive");
    }
}
