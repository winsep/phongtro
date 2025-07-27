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
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('room_rental_id')->nullable()->constrained('room_rentals')->nullOnDelete();
            $table->date('invoice_month')->nullable();
            $table->integer('electricity_usage')->nullable();
            $table->integer('water_usage')->nullable();
            $table->decimal('total_amount', 10, 2)->nullable();
            $table->boolean('is_paid')->default(0);
            $table->date('due_date')->nullable();
            $table->timestamp('created_at')->useCurrent();
        }); 

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
