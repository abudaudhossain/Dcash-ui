import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = ({ a }) => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Dcash</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/transaction">Transaction</Nav.Link>
                    <Nav.Link as={Link} to="/account">My Account</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;