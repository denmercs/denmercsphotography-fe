import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo+name.svg";
import "./header.scss";

const Header = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg">
          <div className="col-6">
            <img src={logo} alt="denmercs photography logo" className="logo" />
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/pricing">Pricing</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/inquire">Inquire Now</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
