import React from "react";
import { SideNav, SideNavItem, Button } from "react-materialize";
import logo from "../assets/logo+name.svg";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <SideNav id="SideNav-10"
    options={{
      draggable: true
    }}
    trigger={<Button node="button">SIDE NAV DEMO</Button>} >
        <SideNavItem>Home</SideNavItem>
      </SideNav>
    </>
  );
};

export default Header;
