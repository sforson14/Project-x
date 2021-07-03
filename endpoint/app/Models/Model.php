<?php

namespace App\Models;

use App\Utils\ParseDate;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model as BaseModel;
use Illuminate\Database\Eloquent\SoftDeletes;

class Model extends BaseModel
{
    use HasFactory, ParseDate;

    public const POLICY = true;


    /**
     * Attributes that are not mass assignable
     *
     * @var array
     */
    protected $guarded = ['id'];

    /**
     * Attributes that are hidden
     *
     * @var array
     */
    protected $hidden = ['deleted_at', 'updated_at'];
}
