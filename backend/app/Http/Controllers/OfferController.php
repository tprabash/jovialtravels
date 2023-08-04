<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Offer;

class OfferController extends Controller
{
    public function index(){
        $offers = Offer::all();
        return response()->json($offers);
    }

    public function store(Request $request){
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
