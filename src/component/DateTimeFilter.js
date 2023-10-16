import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Dropdown from 'react-bootstrap/Dropdown';
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css'

const DateTimeFilter = ({callback}) => {
    const onSelectDefinedFilter = (hours) => {
        const currentDate = new Date(); 
        const twentyFourHoursAgo = new Date(currentDate);
        twentyFourHoursAgo.setHours(currentDate.getHours() - hours);
        callback(twentyFourHoursAgo, currentDate);
    }

    const onSelect = (date) => {
        callback(date.start, date.end);
    };

    return <>
        <Container >
            <Row className='mt-3'>
                <Col md={6} >
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="light" onClick={() => { onSelectDefinedFilter(24); }}>24 Hours</Button>
                        <Button variant="light" onClick={() => { onSelectDefinedFilter(168); }}>7 Days</Button>
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Custom
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <DateRangePicker
                                    onSelect={onSelect}
                                />
                            </Dropdown.Menu>
                        </Dropdown>
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>

    </>
};

export default DateTimeFilter;