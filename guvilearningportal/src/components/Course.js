import React, { useContext, useEffect } from 'react';
import { Button, Card, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import coursesContext from './context/coursesContext';

function Course() {
  let navigate = useNavigate();
  const context = useContext(coursesContext);
  const { courses, getCourses } = context;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getCourses();
    } else {
      navigate('/login');
    }
  }, []);

  const { id } = useParams();
  const course = courses.find((c) => c._id === id);

  if (!course) {
    return <div>Loading...</div>; // Render loading state while courses are being fetched
  }

  return (
    <Container style={{marginLeft:'5px'}}>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>
      <Row>
        <Col md={3}>
          <Image src={course.image} style={{width: '100%', height: '100%',alignItems: 'center',margin: 'auto', display: 'block'}} thumbnail rounded fluid></Image>
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{course.name}</h3>
            </ListGroup.Item>
           
            <ListGroup.Item>
              <h3>Price: {course.price}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>{course.description}</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              
              
              <ListGroup.Item>
                <Link to={`/enroll/${course._id}`}>
                <Button className="btn-black btn-sucess">Enroll now</Button>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Course;
