<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RoomUtilityRoom extends Model
{
    use HasFactory;

    protected $fillable = ['room_id', 'utility_type', 'utility_value'];

    public function room()
    {
        return $this->belongsTo(Room::class);
    }
}
