import React from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import './Header.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Shop Valley</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end page-name">
                        <Nav className="mr-5">
                            <Link className="link" to="/home">Home</Link>
                            <Link className="link" to="/checkOut">Order</Link>
                            <Link className="link" to="/addProduct">Admin</Link>
                            <Link className="link" to="">Deals</Link>
                            <Link to='/login'>
                                <Button variant="success"  > Login </Button>
                            </Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

            </div>

        </div>
    );
};

export default Header;