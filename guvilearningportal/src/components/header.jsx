import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from "react-router-dom";
    
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
function Header() {
    
    const navigate = useNavigate(); // Correctly use useNavigate hook to get the navigate function

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('success');
        localStorage.removeItem('name');
        localStorage.removeItem('isAdmin');
        navigate("/login"); // Use navigate function to navigate to "/login"
    }

    
  return (
    <>
      {[false ].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-lg navbar-danger mb-1 bg-success opacity-100 ">
          <Container fluid>
            <Navbar.Brand href="\" className='text-dark'>Soil Information</Navbar.Brand>
            {/* <Navbar.Toggle className='bg-success border-radius-light'aria-controls={`offcanvasNavbar-expand-${expand}`} /> */}
            <LinkContainer to="/learning">
                            <Nav.Link className='text-lg'>Soil Detail</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/profile">
                            <Nav.Link>Profile</Nav.Link>
                        </LinkContainer>
                        {localStorage.getItem("isAdmin") === 'true' && (
                            <LinkContainer to="/admin">
                                <Nav.Link ><Button variant="info">Admin</Button></Nav.Link>
                            </LinkContainer>
                        )}
                        {!localStorage.getItem("token") ? (
                            <LinkContainer to="/signup">
                                <Nav.Link className='mt-3'  variant='success'>Signup</Nav.Link>
                            </LinkContainer>
                        ) : (
                            <Nav.Link><Button onClick={logout} variant='info'>Logout</Button></Nav.Link>
                        )}
                        {!localStorage.getItem("token") && (
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        )}
          
          </Container>
        </Navbar>
      ))}
    </>
  );
}

    
          
export default Header;
/*<div class="navbar navbar-dark navbar-expand-lg bg-dark fixed-bottom">
  <a class="navbar-brand" href="\">Learning portal</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
  <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <LinkContainer to="/learning">
                            <Nav.Link className='text-lg'>Guvilearning</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/profile">
                            <Nav.Link>Profile</Nav.Link>
                        </LinkContainer>
                        {localStorage.getItem("isAdmin") === 'true' && (
                            <LinkContainer to="/admin">
                                <Nav.Link ><Button variant="success">Admin</Button></Nav.Link>
                            </LinkContainer>
                        )}
                        {!localStorage.getItem("token") ? (
                            <LinkContainer to="/signup">
                                <Nav.Link className='mt-3'  variant='success'>Signup</Nav.Link>
                            </LinkContainer>
                        ) : (
                            <Nav.Link><Button onClick={logout}>Logout</Button></Nav.Link>
                        )}
                        {!localStorage.getItem("token") && (
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
  </div>
</div>
*/