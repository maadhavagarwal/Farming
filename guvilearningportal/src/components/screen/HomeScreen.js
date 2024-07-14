import React  from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
//import { Table} from 'react-bootstrap'
import course from '../Course'
// import Header from '../header'
//import coursesContext from '../context/coursesContext'
function HomeScreen({course}) 

{
  
  return (
    <>
    {/* <Header/> */}
    
    <Card className='my-3 p-3 rounded'>
        <Link to={`/course/${course._id}`}>
        <Card.Img src={course.image}></Card.Img>
        </Link>
        <Card.Body text as="h3">
        <Link to={`/course/${course._id}`}>
        <Card.Title as="div"> <strong>{course.name}</strong></Card.Title>
        
        </Link>
        <Card.Text as="div"> 
        <div className='my-3'>
        </div>
        </Card.Text>
        <Card.Text as="h6">
            {course.price} rs
        </Card.Text>
        </Card.Body>
        </Card>
        
        </>


  )
}

export default HomeScreen