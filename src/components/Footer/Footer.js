import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer className='py-3 footer text-center text-light'>
            <Container>
                <span>Copyright &copy; {year} All Right Reserved by <Link className='text-light text-decoration-none' to='/about'>Arnab Shikder</Link></span>
            </Container>
        </footer>
    );
};

export default Footer;