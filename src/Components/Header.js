// Libraries 
import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Stylesheets
import '../Stylesheets/Header.css'

function Header(){

    function handleToggle(){
        const navContainer = document.getElementById('navContainer');
        if (navContainer) {
            if (navContainer.classList.value.includes('navbar-toggled')) {
                navContainer.classList.remove('navbar-toggled');
            } else {
                navContainer.classList.add('navbar-toggled');
            }
        }
    }

    return (
        <div>
            <Navbar bg="transparent" expand="lg" variant="dark" className="navbar">
                <Navbar.Brand href="#home" className="navbar-brand ms-5">loopstudios</Navbar.Brand>
                <Navbar.Toggle className='toggler' aria-controls="responsive-navbar-nav" onClick={handleToggle}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='nav-links ms-auto'>
                        <div className='navbar-container' id="navContainer">
                            <Nav.Link className="nav-link" href="#">About</Nav.Link>
                            <Nav.Link className="nav-link" href="#">Careers</Nav.Link>
                            <Nav.Link className="nav-link" href="#">Events</Nav.Link>
                            <Nav.Link className="nav-link" href="#">Products</Nav.Link>
                            <Nav.Link className="nav-link" href="#">Support</Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;