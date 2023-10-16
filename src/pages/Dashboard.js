import Card from 'react-bootstrap/Card';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import Graph from '../component/Graph';
import DateTimeFilter from '../component/DateTimeFilter';

import { Data } from "../utils/Data";
import { Data2 } from "../utils/Data";
import { Data3 } from "../utils/Data";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { getdashboardDataByDate, getdashboardTableDataByDate, getDashboardData} from '../services/dashboard';

Chart.register(CategoryScale);
const moment = require('moment');

const DashboardContent = () => {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year),
        datasets: [
            {
                label: "Users",
                data: Data.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            },
            {
                label: "API Calls",
                data: Data2.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            },
            {
                label: "API Failtures",
                data: Data3.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    });

    const pagination = paginationFactory({
        sizePerPage : 5
      });

    const [dashboardData, setDashboardData] = useState([]);
    const [products, setProducts] = useState([]);
    const columns = [{
        dataField: 'user_id',
        text: 'User ID',
        sort: true
    },{
        dataField: 'created_at',
        text: 'Timestamp',
        sort: true
    },{
        dataField: 'status_code_name',
        text: 'Status',
        sort: true
    },{
        dataField: 'error_message',
        text: 'Error Message',
        sort: true
    },{
        dataField: 'user_id',
        text: 'Request',
        sort: true
    },{
        dataField: 'reponse',
        text: 'Response',
        sort: true
    }];
    
    const callApi = (startDate, endDate) => {
        const promise = getdashboardDataByDate(moment(startDate).format('YYYY-MM-DD'), moment(endDate).format('YYYY-MM-DD'))
        promise.then((res) => {
            setDashboardData(res.data);
        }).catch((res) => {
            console.log(res);
        })
    };

    useEffect(() => {
        const promise = getDashboardData();
        promise.then((res) => {
            setDashboardData(res.data);
        }).catch((res) => {
            console.log(res);
        })

        const promise_data = getdashboardTableDataByDate('','')
        promise_data.then((res) => {
            setProducts(res.data.table_data);
        }).catch((res) => {
            console.log(res);
        })
    }, []);

    return (
        <Container >
            <Row>
                <DateTimeFilter callback={callApi} />
            </Row>
            <Row >
                <Col xs={12} sm={12} md={12} lg={4}>
                    <Card className='mt-5'>
                        <Card.Body>
                            <Card.Title className='text-primary'>{dashboardData.user_count}</Card.Title>
                            <Card.Text>
                                Unique Users
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <Card className='mt-5'>
                        <Card.Body>
                            <Card.Title className='text-success'>{dashboardData.api_count}</Card.Title>
                            <Card.Text>
                                No. of calls
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <Card className='mt-5'>
                        <Card.Body>
                            <Card.Title className='text-danger'>{dashboardData.api_fail_count}</Card.Title>
                            <Card.Text>
                                No. of failures
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <Graph chartData={chartData} />
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <BootstrapTable keyField='id' data={products} columns={columns} pagination={pagination} />
                </Col>
            </Row>
        </Container>

    );
};

export default DashboardContent;