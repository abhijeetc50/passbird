<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::any('/passbird/helloworld/{user_id}', [App\Http\Controllers\API\CommonController::class, 'getHelloWorld']);
Route::any('/passbird/dashboard/count', [App\Http\Controllers\API\CommonController::class, 'getDashboardCount']);
Route::any('/passbird/dashboard/data', [App\Http\Controllers\API\CommonController::class, 'getDashboardData']);