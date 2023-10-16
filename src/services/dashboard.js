import axios from 'axios';

export const getdashboardDataByDate = (start, end) =>{
    const promise = axios.get('http://127.0.0.1:8000/api/passbird/dashboard/count?start_date='+start+'&end_date='+end)
    return promise;
}

export const getdashboardTableDataByDate = (start, end) =>{
    const promise = axios.get('http://127.0.0.1:8000/api/passbird/dashboard/data?start_date='+start+'&end_date='+end)
    return promise;
}

export const getDashboardData = () =>{
    const promise = axios.get('http://127.0.0.1:8000/api/passbird/dashboard/count')
    return promise;
}