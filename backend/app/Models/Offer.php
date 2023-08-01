<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    protected $table = 'offers';
    protected $primarykey = 'id';
    protected $fillable = ['name', 'title', 'description', 'image'];

    use HasFactory;
}
