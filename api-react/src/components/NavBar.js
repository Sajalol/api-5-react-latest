import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/api.png"
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../App';

const NavBar = () => {
  const currentUser = useContext(CurrentUserContext)

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
    <Container>
    <NavLink to="/">
      <Navbar.Brand>
        <img src={logo} alt="logo" height="45" />
      </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-left">
          <NavLink 
          exact
          className={styles.NavLink} 
          activeClassName={styles.Active} 
          to="/">
            <i class="fa-solid fa-house"></i> Home
            </NavLink>
          {!currentUser ? (
            <NavLink 
              exact
              className={styles.NavLink} 
              activeClassName={styles.Active} 
              to="/signin">
                <i class="fa-solid fa-right-to-bracket"></i>Sign In
            </NavLink>
          ) : (
            <NavLink 
              exact
              className={styles.NavLink} 
              activeClassName={styles.Active} 
              to="/signout">
                <i class="fa-solid fa-right-from-bracket"></i>Sign Out
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default NavBar