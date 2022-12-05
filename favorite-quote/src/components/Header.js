import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "../css/headerstyle.css";
import SocialSiteIcon from "./SocialSiteIcon";
import { NavLink as ReactLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <p className="main-header-title">Favorite Quote</p>

      <Nav className="justify-content-center mt-3" style={{ marginTop: "0%" }}>
        <NavItem>
          <NavLink className="nav-link nav-custom-style" to='/'>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link nav-custom-style" to='/love'>
            Love
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link nav-custom-style" to="/life">
            Life
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-Link nav-custom-style" to="/inspiration">
            Inspiration
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-Link nav-custom-style" to="/funny">
            Funny
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-Link nav-custom-style" to="/proverb">
            Proverb
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-Link nav-custom-style" href="/addquote">
            Add Quote
          </NavLink>
        </NavItem>
      </Nav>
      <SocialSiteIcon />
    </div>
  );
};

export default Header;
