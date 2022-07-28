import React from 'react';
import Logo from '../assets/main-logo.webp';
import "../styles/Navbar.css";
import { Nav, Container, Navbar } from 'react-bootstrap';
function NavBar() {
    return (
        <>
            <Navbar expand="lg" className='header'>
                <Container>
                    <Navbar.Brand href="/" className='leftSide'>
                        <img src={Logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='rightSide flex-row justify-content-end'>
                        <div className='d-flex links'>
                            <Nav.Link href="/" style={{ color: 'black' }}>Home</Nav.Link>
                            <Nav.Link href="/menu" style={{ color: 'black' }}>Menu</Nav.Link>
                            <Nav.Link href="/about" style={{ color: 'black' }}>About</Nav.Link>
                            <Nav.Link href="/contact" style={{ color: 'black' }}>Contact</Nav.Link>

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
