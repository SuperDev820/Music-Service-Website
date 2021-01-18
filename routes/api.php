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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::group([ 'prefix' => 'v1', 'middleware' => 'api'], function(){

    /* User register */
    Route::post('user/register', 'App\Http\Controllers\Api\v1\AuthController@register');

    /* User login */
    Route::post('user/login', 'App\Http\Controllers\Api\v1\AuthController@login');

    /* Refresh user's token */
    Route::get('user/refresh', 'App\Http\Controllers\Api\v1\AuthController@token');


    Route::group(['middleware' => ['jwt.auth']], function() {

        /* User logout from system */
        Route::post('user/logout', 'Api\v1\AuthController@logout');

        // Get auth user
        Route::get('token/validate', 'Api\v1\AuthController@auth');

        // /* Show all teams */
        // Route::get('teams', 'Api\v1\TeamController@index');

        // /* Team actions */
        // Route::prefix('team')->group(function () {
        //     /* Show team details (players) */
        //     Route::get('{team}', 'Api\v1\TeamController@show');
        //     /* Add a team */
        //     Route::post('/', 'Api\v1\TeamController@store');
        //     /* Add a player to a team */
        //     Route::post('{team}/player', 'Api\v1\PlayerController@store');
        // });

        // /* Player actions */
        // Route::prefix('player')->group(function () {
        //     /* Delete a player */
        //     Route::delete('{player}', 'Api\v1\PlayerController@destroy');
        //     /* Update a player in a team */
        //     Route::patch('{player}', 'Api\v1\PlayerController@update');
        // });

    });

});
