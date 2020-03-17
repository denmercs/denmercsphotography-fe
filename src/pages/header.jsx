import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo+name.svg";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Container>
        <Navbar expand="md" sticky="top">
          <Navbar.Brand href="/">
            <img src={logo} alt="denmercs photography logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Link to="/" className="items">
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/portfolio" className="items">
                  Portfolio
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/pricing" className="items">
                  Pricing
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/inquire" className="inquire">
                  Inquire Now
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
