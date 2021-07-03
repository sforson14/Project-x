<?php

namespace App\Http\Controllers\Api;

use App\Filters\Staff;
use App\Http\Controllers\Controller;
use App\Services\StaffService;
use Illuminate\Http\Request;

class StaffController extends BaseController
{
    public function __construct()
    {
        parent::__construct(new StaffService());
    }

    public function filters()
    {
        return [
            Staff::class,
        ];
    }
}
