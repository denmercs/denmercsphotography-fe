import React from "react";
import logo from "../assets/logo192.png";
import "./header.scss";
import { NavLink } from "react-router-dom";
import {Sidenav, Nav} from 'rsuite';

const Header = () => {
  return (
    <div className="header" >
      <Sidenav>
      <Sidenav.Body>
        <Nav className="header-menu">
          <div className="nav-logo">
            <NavLink to="/" >
                <img src={logo} alt="denmercs logo"  />
            </NavLink>
          </div>
          <div className="nav-link">
          <NavLink to="/engagement">
            Engagement
          </NavLink>
          <NavLink to="/maps">
            Maps
          </NavLink>
          <NavLink to="/faqs">
            FAQs
          </NavLink>
          <NavLink to="/pricing">
            Pricing
          </NavLink>
          <NavLink to="/inquire">
            Inquire
          </NavLink>
          </div>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
    </div>
  );
};

export default Header;
