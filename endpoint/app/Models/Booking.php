<?php

namespace App\Models;

use App\Validators\BookingValidator;

class Booking extends Model
{
    use BookingValidator;

    protected $with = ['client', 'staff'];

    public function staff()
    {
        return $this->belongsTo(User::class, 'staff_id');
    }

    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }
}
