<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [ 'title', 'slug', 'author', 'description', 'price', 'cover', 'stock', ]; 
    // buku bisa ada di banyak cart item 
    public function cartItems() 
    { 
        return $this->hasMany(CartItem::class); 
    } 
    
    // buku bisa ada di banyak order item 
    public function orderItems() 
    { 
        return $this->hasMany(OrderItem::class); 
    }
}
