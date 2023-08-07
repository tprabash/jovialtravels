<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
use App\Http\Controllers\OfferController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', 'App\Http\Controllers\AuthController@login');
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', 'App\Http\Controllers\AuthController@user');
    Route::post('/logout', 'App\Http\Controllers\AuthController@logout');
});

Route::get('/offers-list', 'App\Http\Controllers\OfferController@index');
Route::get('/partners-list', 'App\Http\Controllers\ResortController@index');