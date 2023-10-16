<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Logs;

class CommonController extends Controller
{
    function getHelloWorld(Request $request, $user_id)
    {
        $model = new Logs();
        $model->store($user_id, $request->fullUrl(),  $request->method(),  $request->ip());
        return response()->json('hello world');
    }

    function getDashboardCount(Request $request)
    {
        $start_date = $request->start_date;
        $end_date = $request->end_date;
        $model = new Logs();

        $data = [];
        $data["user_count"] = $model->getUserCount($start_date, $end_date);
        $data["api_count"] = $model->getAPICount('all', $start_date, $end_date);
        $data["api_fail_count"] = $model->getAPICount('fail',$start_date, $end_date);

        return response()->json($data);
    }

    function getDashboardData(Request $request)
    {
        $start_date = $request->start_date;
        $end_date = $request->end_date;
        $model = new Logs();

        $data = [];
        $data["table_data"] = $model->getTableData($start_date, $end_date);

        return response()->json($data);
    }
}
