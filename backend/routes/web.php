<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::group(['middleware' => 'auth'], function () {
    Route::get('/home', [App\Http\Controllers\OfferController::class, 'index'])->name('home');
    Route::post('/offers-add', [App\Http\Controllers\OfferController::class, 'store'])->name('offers.store');
    Route::get('/logout', function () {Auth::logout(); return redirect('/');});
    Route::get('/resorts', [App\Http\Controllers\ResortController::class, 'index'])->name('resorts');
    Route::post('/resorts-add', [App\Http\Controllers\OfferController::class, 'store'])->name('resorts.store');
    Route::get('/partners', [App\Http\Controllers\ResortController::class, 'index'])->name('partners');
    Route::post('/partners-add', [App\Http\Controllers\ResortController::class, 'partnerStore'])->name('partners.store');
});