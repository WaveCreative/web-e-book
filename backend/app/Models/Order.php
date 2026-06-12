<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [ 'user_id', 'voucher_id', 'total_price', 'discount_amount', 'final_price', 'status', ]; 
    // order milik user 
    public function user() 
    { 
        return $this->belongsTo(User::class); 
    } 
    // order punya banyak item 
    public function items() 
    { 
        return $this->hasMany(OrderItem::class); 
    } 
    // order bisa punya voucher 
    public function voucher() 
    { 
        return $this->belongsTo(Voucher::class); 
    }
}
