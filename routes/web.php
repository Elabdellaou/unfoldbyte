<?php

use App\Http\Controllers\{HomeController,ProjectController,ProductController,ContactController};
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[HomeController::class,"index"])->name("unfoldbyte");
Route::post('contact',[ContactController::class,"store"]);
Route::get('project/Optic',[ProjectController::class,"Optic"])->name("Project-Optic");
Route::get('product/Optic',[ProductController::class,"Optic"])->name("Product-Optic");
Route::get('product/SafeChat',[ProductController::class,"Safe"])->name("Product-SafeChat");
Route::get('product/Drive',[ProductController::class,"Drive"])->name("Product-Drive");
Route::get('project/Point',[ProjectController::class,"Point"])->name("Project-Point");
Route::get('project/SelfEducation',[ProjectController::class,"SelfEducation"])->name("Project-SelfEducation");
