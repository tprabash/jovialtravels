<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Offer;

class OfferController extends Controller
{
    public function index(){
        $offers = Offer::all();

        if (request()->wantsJson()) {
            return response()->json($offers);
        }
    
        return view('home', ['offers' => $offers]);
    }

    public function store(Request $request){

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'header_content_1' => 'string|max:255',
            'header_content_2' => 'string|max:255',
            'content_1' => 'required|string|max:255',
            'content_2' => 'required|string|max:255',
            'content_3' => 'required|string|max:255',
            'content_4' => 'string|max:255',
            'content_5' => 'string|max:255',
            'content_6' => 'string|max:255',
            'content_7' => 'string|max:255',
            'content_8' => 'string|max:255',
            'content_9' => 'string|max:255',
            'content_10' => 'string|max:255',
            'footer_content_1' => 'string|max:255',
            'footer_content_2' => 'string|max:255',
            'footer_content_3' => 'string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Assuming you want to validate image upload
        ]);

        $offer = new Offer;
        $offer->name = $request->input('name');
        $offer->title = $request->input('title');
        $offer->header_content_1 = $request->input('header_content_1');
        $offer->header_content_2 = $request->input('header_content_2');
        $offer->content_1 = $request->input('content_1');
        $offer->content_2 = $request->input('content_2');
        $offer->content_3 = $request->input('content_3');
        $offer->content_4 = $request->input('content_4');
        $offer->content_5 = $request->input('content_5');
        $offer->content_6 = $request->input('content_6');
        $offer->content_7 = $request->input('content_7');
        $offer->content_8 = $request->input('content_8');
        $offer->content_9 = $request->input('content_9');
        $offer->content_10 = $request->input('content_10');
        $offer->footer_content_1 = $request->input('footer_content_1');
        $offer->footer_content_2 = $request->input('footer_content_2');
        $offer->footer_content_3 = $request->input('footer_content_3');

        if($request->hasfile('image'))
        {
            $file = $request->file('image');
            $extenstion = $file->getClientOriginalExtension();
            $filename = time().'.'.$extenstion;
            $file->move('uploads/', $filename);
            $offer->image = $filename;
        }

        $offer->save();
        return redirect()->back()->with('message','offer Image Upload Successfully');
    }
}
