<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    protected $table = 'offers';
    protected $primarykey = 'id';
    protected $fillable = [
        'name', 
        'title', 
        'header_content_1',
        'header_content_2',
        'header_content_3',
        'content_1',
        'content_2',
        'content_3',
        'content_4',
        'content_5',
        'content_6',
        'content_7',
        'content_8',
        'content_9',
        'content_10',
        'footer_content_1',
        'footer_content_2',
        'footer_content_3',
        'image'
    ];

    use HasFactory;
}
