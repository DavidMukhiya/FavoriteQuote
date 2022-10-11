import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import '../css/headerstyle.css'

const Header = () => {
  return (
      <Nav className="justify-content-center m-4 p-2">
        <NavItem>
          <NavLink className="nav-link nav-custom-style" to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link nav-custom-style" to="/love">
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
          <NavLink className="nav-Link nav-custom-style" to="/addquotes">
            Add Quote
          </NavLink>
        </NavItem>
      </Nav>
  );
};

export default Header;
