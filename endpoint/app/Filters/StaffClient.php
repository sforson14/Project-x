<?php

namespace App\Filters;

use App\Utils\Constants;

class StaffClient
{

    public function handle($request, \Closure $next)
    {

        $data = $next($request);

        $user = auth()->user();

        if ($user->role_id == Constants::STAFF_ROLE_ID) {
            $data->where('staff_id', $user->id);
        } else if ($user->role_id == Constants::CLIENT_ROLE_ID) {
            $data->where('client_id', $user->id);
        }

        return $data;
    }
}
