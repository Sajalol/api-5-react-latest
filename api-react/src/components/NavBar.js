import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/api.png"

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md" fixed="top">
    <Container>
      <Navbar.Brand>
        <img src={logo} alt="logo" height="45" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-left">
          <Nav.Link><i class="fa-solid fa-house"></i> Home</Nav.Link>
          <Nav.Link><i class="fa-solid fa-right-to-bracket"></i>Sign In</Nav.Link>
          <Nav.Link><i class="fa-solid fa-right-from-bracket"></i>Sign Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default NavBar