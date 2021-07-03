<?php

namespace App\Services;

use App\Models\User;

class StaffService extends BaseService
{

    public function __construct()
    {
        parent::__construct(User::class);
    }


    public function store(array $data)
    {
        $data['password'] = "secret";

        return parent::store($data);
    }
}
