<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = [ 'user_id', ]; 
    // cart milik 1 user 
    public function user() 
    {
        return $this->belongsTo(User::class); 
    } 
    // cart punya banyak item 
    public function items() 
    { 
        return $this->hasMany(CartItem::class); 
    }
}
