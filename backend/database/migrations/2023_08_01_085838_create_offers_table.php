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
        Schema::create('offers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('title');
            $table->text('header_content_1');
            $table->text('header_content_2');
            $table->text('content_1');
            $table->text('content_2');
            $table->text('content_3');
            $table->text('content_4');
            $table->text('content_5');
            $table->text('content_6');
            $table->text('content_7');
            $table->text('content_8');
            $table->text('content_9');
            $table->text('content_10');
            $table->text('footer_content_1');
            $table->text('footer_content_2');
            $table->text('footer_content_3');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('offers');
    }
};
