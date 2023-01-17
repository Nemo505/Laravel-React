<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $data = $request->validated();
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $data['password'],
        ]);

        $token = $user->createToken('main')->plainTextToken;

        // return response([
        //     'user' => $user,
        //     'token' => $token,
        // ]);

        return response(compact('user', 'token'));
    }
    
    public function singup(SignupRequest $request)
    {
        $credentials = $request->validated();
        if ($credentials) {
            
        }

        return response();
    }

    public function logout(Request $request)
    {
        
    }
}
