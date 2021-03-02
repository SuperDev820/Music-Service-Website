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

    /* User logout from system */
    Route::get('user/logout', 'App\Http\Controllers\Api\v1\AuthController@logout');

    // Get auth user
    Route::get('token/validate', 'App\Http\Controllers\Api\v1\AuthController@auth');

    // Course actions
    Route::prefix('course')->group(function () {
        /* Get all course details*/
        Route::get('/', 'App\Http\Controllers\Api\v1\CourseController@getAll');
        /* Get course detail by id */
        Route::get('{courseId}', 'App\Http\Controllers\Api\v1\CourseController@getById');
        // /* Add a course */
        // Route::post('/', 'App\Http\Controllers\Api\v1\CourseController@create');
        // /* Update a course by id */
        // Route::put('{courseId}', 'App\Http\Controllers\Api\v1\CourseController@update');
        // /* Delete course by id */
        // Route::delete('{courseId}', 'App\Http\Controllers\Api\v1\CourseController@delete');
    });
    //Admin actions
    Route::group([ 'prefix' => 'admin' ], function(){
        /* Get all users details*/
        Route::get('users', 'App\Http\Controllers\Api\v1\UserController@getAll');
        // /* Add a user */
        Route::post('user/create', 'App\Http\Controllers\Api\v1\UserController@create');
        // /* Update a user */
        Route::post('user/update', 'App\Http\Controllers\Api\v1\UserController@update');
        /* Get user detail by id */
        Route::get('user/{userId}', 'App\Http\Controllers\Api\v1\UserController@getById');
        /* delete user by id */
        Route::get('user/delete/{userId}', 'App\Http\Controllers\Api\v1\UserController@delete');
    });

    Route::group(['middleware' => ['jwt.auth']], function() {



        // /* Show all teams */
        // Route::get('teams', 'Api\v1\TeamController@index');


        // /* Player actions */
        // Route::prefix('player')->group(function () {
        //     /* Delete a player */
        //     Route::delete('{player}', 'Api\v1\PlayerController@destroy');
        //     /* Update a player in a team */
        //     Route::patch('{player}', 'Api\v1\PlayerController@update');
        // });

    });

});
