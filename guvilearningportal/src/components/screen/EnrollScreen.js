import React, { useState,useContext  } from 'react'
import { Button, Col, Container, Form, Row, Card} from 'react-bootstrap'
import {  useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
//import Messages from '../messages'

import coursesContext from '../context/coursesContext';
function  EnrollScreen({props}){
    const navigate =useNavigate();
    const {id}=useParams();
    const [paymentId, setPaymentId] = useState("");
  const [Address, setAddress] = useState("");
  const [Name, setName] = useState("");
  const context = useContext(coursesContext);
  const {addEnrollment } =context;

  const submitHandler =(e)=>{
    e.preventDefault()
    addEnrollment(id,Name,paymentId,Address)
    navigate("/profile")
  };

return  ( <>
    <br/>
    <Container className='mt-5'>
        <Row>
    <Col md={4}></Col>
    <Col md={4}>
        <Card>
            <Card.Header as="h1" className="text-center bg-dark text-light">Enroll</Card.Header>
            <Card.Body>
                 <Form onSubmit={submitHandler}>
                 <Form.Group controlId='paymentId'>
        <Form.Label>paymentId</Form.Label>
        <Form.Control
         name="paymentId"
          type="text"
          placeholder="Enter your paymentid"
          value={paymentId}
          onChange={(e) => setPaymentId(e.target.value)}
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId='Address'>
        <Form.Label>Address</Form.Label>
        <Form.Control
         name="Address"
          type="text"
          placeholder="Enter your course description"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId='Name'>
        <Form.Label>Name</Form.Label>
        <Form.Control
         name="Name"
          type="text"
          placeholder="Enter your course Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
        ></Form.Control>
      </Form.Group>
      <Button className='mt-3'type='submit' variant='success'>
    
    Enroll Now
    </Button>          

   </Form>
            </Card.Body>
        </Card>
    </Col>
    </Row></Container>
    

    </>)
}
export default EnrollScreen