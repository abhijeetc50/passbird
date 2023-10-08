import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import Graph from './Graph';

import { Data } from "../utils/Data";
import { Data2 } from "../utils/Data";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

Chart.register(CategoryScale);

const DashboardContent = () => {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained ",
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
                label: "Users Gained ",
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
            }
        ]
    });

    return (
        <Container className="mt-5">
            <Row >
                <Col >
                    <Card >
                        <Card.Body>
                            <Card.Title>30</Card.Title>
                            <Card.Text>
                                Unique Users
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card >
                        <Card.Body>
                            <Card.Title>345</Card.Title>
                            <Card.Text>
                                No. of calls
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card >
                        <Card.Body>
                            <Card.Title>42</Card.Title>
                            <Card.Text>
                                No. of failures
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Graph chartData={chartData} />
                </Col>
                <Col >
                </Col>
            </Row>
        </Container>

    );
};

export default DashboardContent;