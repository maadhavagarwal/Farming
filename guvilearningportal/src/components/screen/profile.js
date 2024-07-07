import React, { useContext, useEffect } from "react";
import { Col, Container, Row, Table,Button } from "react-bootstrap";
import coursesContext from "../context/coursesContext";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const context = useContext(coursesContext);
    const { getUserDetail, enrollCourses, userdetail, getCoursesEnrollments, getCourses } = context;

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (localStorage.getItem("token")) {
                    await getUserDetail();
                    await getCoursesEnrollments();
                    await getCourses();
                } else {
                    navigate("/login");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Container>
                <br />
            </Container>
            <Row>
                <Col md={3}>
                    <h3 className="bg-success text-white text-center">PERSONAL DETAILS</h3>
                    <Table responsive="sm">
                        <tr className="bg-primary text-white">
                            <th>Name</th>
                            <td>{userdetail.name}</td>
                        </tr>
                        <tr className="bg-primary text-white">
                            <th>Email</th>
                            <td>{userdetail.email}</td>
                        </tr>
                        <tr className="bg-primary text-white">
                            <th>Phone Number</th>
                            <td>{userdetail.mobile}</td>
                        </tr>
                    </Table>
                </Col>
                <Col md={9}>
                    <h3 className="bg-success text-white text-center">COURSE DETAILS</h3>
                    <Table responsive="sm">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th>COURSE id</th>
                                <th>Course Name</th>
                                <th>PAYMENT ID</th>
                                <th>Address</th>
                                <th>Start</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(enrollCourses) && enrollCourses.map((course) => (
                                <tr key={course._id}>
                                    <td>{course._id}</td>
                                    <td>{course.Name}</td>
                                    <td>{course.paymentId}</td>
                                    <td>{course.Address}</td>
                                    <td>{<Button variant="danger success" >Start now</Button>}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    );
}

export default Profile;
