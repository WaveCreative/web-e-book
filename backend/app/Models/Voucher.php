<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    protected $fillable = [ 'code', 'discount_percent', 'max_discount', 'min_purchase', 'is_active', 'expired_at', ]; 
    // voucher bisa dipakai banyak order 
    public function orders() 
    { 
        return $this->hasMany(Order::class); 
    }
}
