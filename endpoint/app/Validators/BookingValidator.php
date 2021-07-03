<?php


namespace App\Validators;

use App\Models\Role;
use App\Utils\Constants;
use Illuminate\Validation\Rule;

trait BookingValidator
{



    /**
     * validation rules for storing a booking
     *
     * @return void
     */
    public static function storeRules()
    {
        return [
            'date' => ['required', 'date', 'date', 'after_or_equal:today'],
            'time' => ['string', 'required', 'date_format:H:i'],
            'staff_id' => [
                'required', 'integer',
                Rule::exists('users', 'id')
                    ->where('role_id', Constants::STAFF_ROLE_ID)
            ]
        ];
    }

    /**
     * validation rules for updating a booking
     *
     * @param  mixed $id
     * @return void
     */
    public static function updateRules($id)
    {
        return [
            'date' => ['required', 'date', 'date', 'after_or_equal:today'],
            'time' => ['string', 'required', 'date_format:H:i'],
            'staff_id' => [
                'required', 'integer',
                Rule::exists('users', 'id')
                    ->where('role_id', Constants::STAFF_ROLE_ID)
            ]
        ];
    }

    /**
     * Custom validation error  messages
     *
     * @return array
     */
    public static function errorMessages()
    {
        return [
            'staff_id.exists' => 'Sorry, the selected staff does not exists',
            'staff_id.required' => 'Staff is required'
        ];
    }
}
