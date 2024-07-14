import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Messages from "../messages";

import coursesContext from "../context/coursesContext";

function Admin() {
  let navigate = useNavigate();
  const context = useContext(coursesContext);
  const {
    getAdminCourses,
    adminCourses,
    addCourses,
    deleteCourses,
    getCoursesEnrollmentsAdmin,
  } = context;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        if (localStorage.getItem("token")) {
          await getAdminCourses();
          await getCoursesEnrollmentsAdmin();
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  //let navigate = useNavigate();
  const [cname, setCname] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    addCourses(cname, desc, image, price);
    setCname("");
    setDesc("");
    setImage("");
    setPrice("");

    setMessage("Soil INformation  Added Successfully");
    window.location.reload();
  };
  const handleDelete = (id) => {
    deleteCourses(id);
  };
  return (
    <>
      <Container>
        <br />
      </Container>

      <Row>
        <Col md={3}>
          <Link to="/" className="btn btn-dark my-3">
            Go Back
          </Link>
          <Form onSubmit={handleClick}>
            <br />
            <h1 className="text-center">Add Soil Details</h1>
            {Messages && <Messages variant="success">{message}</Messages>}
            <Form.Group controlId="cname">
              <Form.Label>Soil Name</Form.Label>
              <Form.Control
                name="cname"
                type="text"
                placeholder="Enter your Soil Name"
                value={cname}
                onChange={(e) => setCname(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label> Soid description</Form.Label>
              <Form.Control
                name="desc"
                type="text"
                placeholder="Enter your Soil description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>image</Form.Label>
              <Form.Control
                name="image"
                type="text"
                placeholder="Enter Soil Image Link"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>price</Form.Label>
              <Form.Control
                name="price"
                type="Number"
                placeholder="Enter your Soil Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Button className="mt-3" type="submit" variant="success">
              Add Soil
            </Button>
          </Form>
        </Col>
        <Col md={9}>
          <h3 className="bg-success text-light text-center">Admin Panel</h3>
          <Table responsive="sm">
            <thead>
              <th>User id</th>
              <th>id</th>
              <th>Soil Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>delete</th>
            </thead>
            {Array.isArray(adminCourses) &&
              adminCourses.map((course) => (
                <tr key={course._id}>
                  <td>{course.user}</td>

                  <td>{course._id}</td>
                  <td>{course.name}</td>
                  <td>
                    <img src={course.image} alt="" width="100px" height="100" />
                  </td>

                  <td>{course.price}</td>

                  <td>
                    <Button
                      variant="danger success"
                      onClick={() => handleDelete(course._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </Table>
        </Col>
      </Row>
    </>
  );
}
export default Admin;
