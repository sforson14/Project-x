<?php

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\StaffController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**
 * AUTH ROUTES
 */
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);

Route::get('roles', [RoleController::class, 'index']);


Route::group(['middleware' => ['auth:api']], function () {

    Route::get('user', [AuthController::class, 'authenticatedUser']);

    Route::group(['middleware' => 'admin.staff'], function () {

        Route::apiResource('staff', StaffController::class);
    });

    Route::apiResource('bookings', BookingController::class);
});
