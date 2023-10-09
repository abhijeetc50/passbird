import { useState } from 'react';
import logo from '../images/MetaKeep.png';
import '../styles/login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import e from 'cors';


async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 

function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const nav = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();

    nav('/dashboard');
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={4}>
          <img src={logo} alt="Logo" />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"  onChange={e => setUserName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;