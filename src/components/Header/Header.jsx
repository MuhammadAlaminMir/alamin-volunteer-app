import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    let windowWidth = window.screen.width;
    let navClassName = 'd-flex justify-content-end';
    if (windowWidth < 600) {
        navClassName = '';
    }
    return (
        <div className="container">
            <Navbar collapseOnSelect expand="md">
                <Navbar.Brand href="#home">
                    <img
                        src={require('../logos/Group 1329.png')}
                        height="40vh"
                        alt=""
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className={navClassName}
                >
                    <Nav>
                        <Link to="/home" className="link">
                            Home
                        </Link>
                        <Link to="/" className="link">
                            Donation
                        </Link>
                        <Link to="/login" className="link">
                            Login
                        </Link>
                        <Link to="/events" className="link">
                            Events
                        </Link>
                        <Button
                            className="btn btn-primary link"
                            id="register"
                            onClick={() => alert('Please select a Event')}
                        >
                            <Link to="/" className="link">
                                Register
                            </Link>
                        </Button>

                        <Button className="btn btn-dark link" id="admin">
                            <Link to="/admin" className="link">
                                Admin
                            </Link>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
