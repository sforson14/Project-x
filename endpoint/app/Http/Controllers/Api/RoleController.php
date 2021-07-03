<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\RoleService;
use Illuminate\Http\Request;

class RoleController extends BaseController
{
    public function __construct()
    {
        parent::__construct(new RoleService());
    }
}
