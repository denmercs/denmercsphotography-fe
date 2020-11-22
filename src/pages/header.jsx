import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom"
import "./header.scss";
import logo from "../assets/logo.png"

const Header = () => {
    
  return (
    <>  
        <Navbar bg="dark" variant="light" expand="lg">
            <Navbar.Brand href="/">
                <img src={logo} alt="denmercs photography logo" className="logo" />
                <p>denmercs (photo + video)</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/weddings">Weddings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/engagement">Engagements</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/inquire">Inquire</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
  );
};

export default Header;
