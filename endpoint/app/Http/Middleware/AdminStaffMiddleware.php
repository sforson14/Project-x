<?php

namespace App\Http\Middleware;

use App\Utils\Constants;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AdminStaffMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $auth  = auth()->user();

        if ($auth && in_array($auth->role_id, [Constants::ADMIN_ROLE_ID, Constants::STAFF_ROLE_ID])) {

            return $next($request);
        }

        return response()->json(['message' => 'permission denied to perform this action'], Response::HTTP_FORBIDDEN);
    }
}
