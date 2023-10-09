import Card from 'react-bootstrap/Card';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import Graph from './Graph';

import { Data } from "../utils/Data";
import { Data2 } from "../utils/Data";
import { Data3 } from "../utils/Data";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

Chart.register(CategoryScale);

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

    return (
        <Container >
            <Row >
                <Col xs={12} sm={12} md={12} lg={4}>
                    <Card className='mt-5'>
                        <Card.Body>
                            <Card.Title className='text-primary'>30</Card.Title>
                            <Card.Text>
                                Unique Users
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4}> 
                    <Card className='mt-5'>
                        <Card.Body>
                            <Card.Title className='text-success'>345</Card.Title>
                            <Card.Text>
                                No. of calls
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <Card className='mt-5'>
                        <Card.Body>
                            <Card.Title className='text-danger'>42</Card.Title>
                            <Card.Text>
                                No. of failures
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <Graph chartData={chartData} />
                </Col>
            </Row>
        </Container>

    );
};

export default DashboardContent;