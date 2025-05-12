<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('Repair_Requests', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('description')->nullable();;
            $table->string('status')->default('pending');
            $table->string('image_url')->nullable();
            $table->string('due_date')->nullable();
            $table->string('tracker');
            $table->foreignId('created_by')->constrained('users'); 
            $table->timestamps();
        });
    }
    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Repair_Requests');
    }
};
