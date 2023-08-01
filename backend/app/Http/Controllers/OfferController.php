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
        $offer->description = $request->input('description');

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
