<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\DB;

class Logs extends Authenticatable
{
    function store($user_id, $Url,  $method,  $ip){
        DB::table('logs')->insert([
            'user_id' => $user_id,
            'api_name' => 'HELLOWORLD',
            'method' =>  $method,
            'request_url' =>$Url,
            'ip' =>  $ip,
            'status_code' =>  '200'
        ]);
    }

    function getUserCount($start_date, $end_date){

        $return_obj = DB::table('logs')
        ->selectRaw('count(distinct user_id) count_user_id')
        ->where('api_name', 'HELLOWORLD')
        ->whereBetween('created_at', [$start_date, $end_date])
        ->get();

        return $return_obj[0]->count_user_id;
    }

    function getTableData($start_date, $end_date){

        $return_obj = DB::table('logs')
        ->selectRaw('*, IF(status_code = 200, "SUCCESS" , "ERROR") status_code_name')
        ->where('api_name', 'HELLOWORLD');

        if($start_date != '' & $end_date !=''){
            $return_obj =  $return_obj->whereBetween('created_at', [$start_date, $end_date]);
        }

        $return_obj = $return_obj->get();

        return $return_obj;
    }


    function getAPICount($type, $start_date, $end_date){

        $return_object = DB::table('logs')
        ->selectRaw('count(status_code)')
        ->whereBetween('created_at', [$start_date, $end_date]);

        if($type == 'fail'){
            $return_object = $return_object->where('status_code','!=' ,'200');
        }

        $count = $return_object->count();

        return $count;
    }
}