import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const { user, logOut } = useAuth()

    const activeStyle = isActive => ({
        color: isActive ? "#01305b" : "#000"
    })
    return (
        <>
            <Navbar collapseOnSelect bg="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <NavLink to="/home" style={activeStyle} className="nav-menu">Home</NavLink>
                            <NavLink to="/about" style={activeStyle} className="nav-menu">About</NavLink>
                            <NavLink to="/cars" style={activeStyle} className="nav-menu">Products</NavLink>
                            {
                                user.email && <span className="d-flex align-items-center user-name ms-3">{user.displayName}</span>
                            }
                            {user.email ?
                                <div className="d-flex align-items-center">
                                    <NavLink to="/dashboard" style={activeStyle} className="nav-menu">Dashboard</NavLink>
                                    <button className="order-btn logout-btn" onClick={logOut}>Logout <i className="fas fa-sign-out-alt"></i></button>
                                </div>
                                :
                                <NavLink to="/login" style={activeStyle} className="nav-menu">Login</NavLink>
                                }
                                <NavLink to="/contact" style={activeStyle} className="nav-menu">Contact Us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;