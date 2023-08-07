<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Resort;

class ResortController extends Controller
{
    public function index(){
        $resorts = Resort::all();

        if (request()->wantsJson()) {
            return response()->json($resorts);
        }
    
        return view('partners', ['resorts' => $resorts]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'resort_name' => 'required|string|max:255',
            'resort_title' => 'required|string|max:255',
            'resort_main_bak_img' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'resort_first_sm_img' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'resort_first_bg_img' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'resort_second_sm_img' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'resort_second_bg_img' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'resort_third_sm_img' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'resort_third_bg_img' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'resort_first_content_title' => 'required|string|max:255',
            'resort_first_content_one' => 'required|string|max:255',
            'resort_first_content_second' => 'required|string|max:255',
            'resort_first_content_third' => 'required|string|max:255',
            'resort_second_content_title' => 'required|string|max:255',
            'resort_second_content_one' => 'required|string|max:255',
            'resort_second_content_second' => 'required|string|max:255',
            'resort_second_content_third' => 'required|string|max:255',
            'resort_third_content_title' => 'required|string|max:255',
            'resort_third_content_one' => 'required|string|max:255',
            'resort_third_content_second' => 'required|string|max:255',
            'resort_third_content_third' => 'required|string|max:255',
        ]);

        $resort = new Resort();

        $resort->resort_name = $request->input('resort_name');
        $resort->resort_title = $request->input('resort_title');

        $mainBgImage = $request->file('resort_main_bak_img');
        $mainBgImagePath = $mainBgImage->store('uploads/' . $request->input('resort_name'));
        $resort->resort_main_bak_img = $mainBgImagePath;

        $resort->resort_first_sm_img = $request->file('resort_first_sm_img')->store('uploads/' . $request->input('resort_name'));
        $resort->resort_first_bg_img = $request->file('resort_first_bg_img')->store('uploads/' . $request->input('resort_name'));
        $resort->resort_second_sm_img = $request->file('resort_second_sm_img')->store('uploads/' . $request->input('resort_name'));
        $resort->resort_second_bg_img = $request->file('resort_second_bg_img')->store('uploads/' . $request->input('resort_name'));
        $resort->resort_third_sm_img = $request->file('resort_third_sm_img')->store('uploads/' . $request->input('resort_name'));
        $resort->resort_third_bg_img = $request->file('resort_third_bg_img')->store('uploads/' . $request->input('resort_name'));

        $resort->resort_first_content_title = $request->input('resort_first_content_title');
        $resort->resort_first_content_one = $request->input('resort_first_content_one');
        $resort->resort_first_content_second = $request->input('resort_first_content_second');
        $resort->resort_first_content_third = $request->input('resort_first_content_third');

        $resort->resort_second_content_title = $request->input('resort_second_content_title');
        $resort->resort_second_content_one = $request->input('resort_second_content_one');
        $resort->resort_second_content_second = $request->input('resort_second_content_second');
        $resort->resort_second_content_third = $request->input('resort_second_content_third');

        $resort->resort_third_content_title = $request->input('resort_third_content_title');
        $resort->resort_third_content_one = $request->input('resort_third_content_one');
        $resort->resort_third_content_second = $request->input('resort_third_content_second');
        $resort->resort_third_content_third = $request->input('resort_third_content_third');

        $resort->save();
        return redirect()->back()->with('success', 'Resort added successfully!');
    }

    public function partnerStore(Request $request)  {

        $validatedData = $request->validate([
            'resort_name' => 'required|string|max:255',
            'resort_description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', 
            'resort_url' => 'required|string',
        ]);
        
        $resort = new Resort;
        $resort->resort_name = $request->input('resort_name');
        $resort->resort_description = $request->input('resort_description');
        $resort->image = $request->input('image');
        $resort->resort_url = $request->input('resort_url');

        if($request->hasfile('image'))
        {
            $file = $request->file('image');
            $extenstion = $file->getClientOriginalExtension();
            $filename = time().'.'.$extenstion;
            $file->move('uploads/resorts/', $filename);
            $resort->image = $filename;
        }

        $resort->save();
        return redirect()->back()->with('message','resort Image Upload Successfully');
    }
}