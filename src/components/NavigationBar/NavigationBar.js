import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import { faEarth } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationBar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar fixed="top" className='py-2' bg="light" expand="lg">
            <Container>
                <NavLink className='navbar-brand logo' to="/"><FontAwesomeIcon className='pe-2' icon={faEarth} />Wild~Movements</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink className='nav-link' to="/">Home</NavLink>
                    <NavLink className='nav-link' to="/services">Services</NavLink>
                    <NavLink className='nav-link' to="/blogs">Blogs</NavLink>
                    <NavLink className='nav-link' to="/about">About Me</NavLink>
                    <NavLink className='nav-link' to="/contact">Contact Me</NavLink>
                    {
                        user ?
                        <button onClick={logout} className='signout-btn'>Sign Out</button>
                        :
                        <>
                        <NavLink className='nav-link' to="/login">Login</NavLink>
                        <NavLink className='nav-link' to="/signup">Sign Up</NavLink>
                        </>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default NavigationBar;