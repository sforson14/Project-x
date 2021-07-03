<?php

namespace App\Policies;

use App\Models\Booking;
use App\Models\User;
use App\Utils\Constants;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class BookingPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Booking  $booking
     * @return mixed
     */
    public function view(User $user, Booking $booking)
    {
        return $this->check($user, $booking);
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Booking  $booking
     * @return mixed
     */
    public function update(User $user, Booking $booking)
    {
        return $this->check($user, $booking);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Booking  $booking
     * @return mixed
     */
    public function delete(User $user, Booking $booking)
    {
        return $this->check($user, $booking);
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Booking  $booking
     * @return mixed
     */
    public function restore(User $user, Booking $booking)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Booking  $booking
     * @return mixed
     */
    public function forceDelete(User $user, Booking $booking)
    {
        //
    }

    private function check($user, $booking)
    {

        if ($user->role_id == Constants::STAFF_ROLE_ID && $user->id == $booking->staff_id) {

            return Response::allow();
        } else if ($user->role_id == Constants::CLIENT_ROLE_ID && $user->id == $booking->client_id) {

            return Response::allow();
        } else {

            return response::deny();
        }
    }
}
