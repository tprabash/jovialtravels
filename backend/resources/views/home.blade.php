@extends('layouts.app')

@section('content')
<div class="container">

    <div class="card">
        <div class="card-body">
                <form action="{{ url('offers-add') }}" method="POST" enctype="multipart/form-data">
                        @csrf

                        <div class="mb-3">
                            <label for="">Resort Name</label>
                            <input type="text" name="name" required class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="">Resort Title</label>
                            <input type="text" name="title" required class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="">Resort Description</label>
                            <textarea name="description" id="" cols="30" rows="10" class="form-control"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="">Resort Image</label>
                            <input type="file" name="image" required class="form-control">
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>

                </form>
        </div>
    </div>
    
</div>
@endsection
