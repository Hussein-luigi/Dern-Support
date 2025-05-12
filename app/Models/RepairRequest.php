<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RepairRequest extends Model
{
    /** @use HasFactory<\Database\Factories\RequestsFactory> */
    use HasFactory;
    public function createdby(){
        return $this->belongsTo(User::class, 'created_by');
    }
    protected $fillable = ['name', 'description', 'status', 'tracker', 'due_date', 'created_by'];

}
 