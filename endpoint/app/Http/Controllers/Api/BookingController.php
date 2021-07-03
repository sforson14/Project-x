<?php

namespace App\Http\Controllers\Api;

use App\Filters\StaffClient;
use App\Http\Controllers\Controller;
use App\Services\BookingService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BookingController extends BaseController
{
    public function __construct()
    {
        parent::__construct(new BookingService());
    }

    public function store(Request $request)
    {
        $data = $request->validate($this->service->model()::storeRules(), $this->service->model()::errorMessages());

        $resource = $this->service->store($this->parseData($data));

        return response()->json($resource, Response::HTTP_CREATED);
    }

    protected function filters()
    {
        return [
            StaffClient::class
        ];
    }
}
