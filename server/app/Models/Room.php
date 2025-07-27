<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Room extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'capacity', 'description', 'price'];

    public function utilities()
    {
        return $this->belongsToMany(RoomUtility::class, 'room_utility_room');
    }

    public function district()
    {
        return $this->belongsTo(District::class);
    }
    
}
