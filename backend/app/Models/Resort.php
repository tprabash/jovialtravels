<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resort extends Model
{
    protected $table = 'resorts';
    protected $primarykey = 'id';
    protected $fillable = ['resort_name', 'resort_description', 'image', 'resort_url'];

    use HasFactory;
}
