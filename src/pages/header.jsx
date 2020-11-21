import React from "react";
import {Nav} from "react-bootstrap";
import "./header.scss";
import logo from "../assets/logo192.png"

const Header = () => {
  return (
    <>
         <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            >
              <div className="sidebar-sticky">
                  <img src={logo} alt="denmercs photography logo" className="logo" />
                  <div className="logo-name">
                    <h1>Denmercs</h1>
                    <p>Photo + Video</p>
                  </div>
              </div>
              <div className="link-group">
                  <Nav.Item>
                      <Nav.Link href="/home">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link href="/Weddings">Weddings</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link href="/engagement">Engagement</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link href="/pricing">Pricing</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link href="/inquire">Inquire</Nav.Link>
                  </Nav.Item>
              </div>
            </Nav>
      </>
  );
};

export default Header;
