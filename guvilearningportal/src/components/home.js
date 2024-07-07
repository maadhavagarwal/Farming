import React, { useContext, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import HomeScreen from './screen/HomeScreen';
import coursesContext from './context/coursesContext';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();
  const context = useContext(coursesContext);
  const { courses, getCourses } = context;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        if (localStorage.getItem('token')) {
         await getCourses();
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  },[]);

  return (
    <>
      <h1 className='text-center m-3'>Welcome to Soil Information</h1>
      <hr />
      <Row>
      {Array.isArray(courses) && courses.map((course) => (<Col key={course._id} sm={12} md={6} lg={4} xl={3}>
      <HomeScreen course={course} />
    </Col>
  ))}
</Row>
    </>
  );
}

export default Home;
