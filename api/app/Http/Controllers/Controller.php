<?php

namespace App\Http\Controllers;

use App\Mail\ContactRequest;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    protected $contactData;

    public function __construct(Request $request){
        $this->contactData = $request->all();
    }

    public function setMessage()
    {
        try {
            $this->sendEmail();      
        } catch (\Throwable $th) {
            Log::debug(json_encode($th));
            return response(['error' => true], 500)->header('Content-Type', 'application/json');    
        }
        return response(['succsses' => true], 200)->header('Content-Type', 'application/json');
    }
    public function sendEmail()
    {
        Mail::to(env('MAIL_ALWAYS_TO'))->send(new ContactRequest($this->contactData));
        $this->storeLog();
    }
    public function storeLog()
    {
        Log::debug(json_encode($this->contactData));
    }
}
