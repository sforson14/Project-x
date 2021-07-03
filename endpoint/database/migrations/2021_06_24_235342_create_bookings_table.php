<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('client_id');

            $table->foreign('client_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->unsignedBigInteger('staff_id');
            $table->foreign('staff_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->string('payment_id')->nullable();
            $table->date('date');
            $table->string('time');

            $table->string('status')->nullable()->comment('active, inactive, paid, unpaid');

            $table->boolean('is_cancelled')->default(false);
            $table->boolean('available')->default(false);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bookings');
    }
}
