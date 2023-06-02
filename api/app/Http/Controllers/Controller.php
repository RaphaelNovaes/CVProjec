<?php

namespace App\Http\Controllers;

use App\Mail\ContactRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    private $contactData;

    public function __construct(Request $request){
        $this->contactData = $request->all();
    }

    public function setMessage()
    {
        try {
            $this->sendEmail();      
        } catch (\Throwable $th) {
            Log::error(json_encode($th));
            return response(['error' => true], 500)->header('Content-Type', 'application/json');    
        }
        return response(['succsses' => true], 200)->header('Content-Type', 'application/json');
    }
    public function sendEmail()
    {
        $to = config('mail.mailers.smtp.always_to') ?: env('MAIL_ALWAYS_TO');
        Mail::to($to)->send(new ContactRequest($this->contactData));
        $this->storeLog();
    }
    public function storeLog($data = null)
    {
        $data = $data ?: $this->contactData;
        Log::debug(json_encode($data));
    }
}
