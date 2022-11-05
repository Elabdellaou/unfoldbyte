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
Route::get('project/drive',[ProjectController::class,"drive"])->name("Project-drive");
Route::get('product/drive',[ProductController::class,"drive"])->name("Product-drive");
