<?php

namespace App\Services;

use App\Models\Booking;

class BookingService extends BaseService
{

    public function __construct()
    {
        parent::__construct(Booking::class);
    }
}
