import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Wild~Movements</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink className='nav-link' to="/">Home</NavLink>
                    <NavLink className='nav-link' to="/services">Services</NavLink>
                    <NavLink className='nav-link' to="/blogs">Blogs</NavLink>
                    <NavLink className='nav-link' to="/about">About Me</NavLink>
                    <NavLink className='nav-link' to="/contact">Contact Me</NavLink>
                    <NavLink className='nav-link' to="/login">Login</NavLink>
                    <NavLink className='nav-link' to="/signup">Sign Up</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default NavigationBar;