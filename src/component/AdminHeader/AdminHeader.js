import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AdminHeader.css'

const AdminHeader = () => {
    return (
        <div>
            <div className="header">

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center page-name">
                        <Nav className="mr-5">
                            <Link className="link" to="/manage">Manage Product</Link>
                            <Link className="link" to="/addProduct">Add Product</Link>
                            <Link className="link" to="/editProduct">Edit Product</Link>
                            

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

            </div>
        </div>
    );
};

export default AdminHeader;