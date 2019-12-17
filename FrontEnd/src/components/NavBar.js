import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import HoverToolTip from './HoverToolTip';

const NavBar = ({ DarkTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  

  return (
    <div>
        <Navbar color="faded" light={!DarkTheme} dark={DarkTheme} expand="md">
        <NavbarBrand href="https://www.yash.com/">
          {DarkTheme ? 
          <img id="yashLogo" alt="YASH Technologies" src='/yash-logo-white.svg' width="70" /> : 
          <img id="yashLogo" alt="YASH Technologies" src='/yash-logo.svg' width="70" />}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2"/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink style={{ color: 'inherit' }} tag={Link} to="/" onClick={toggle}>Overview</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'inherit' }} tag={Link} to="/resources" onClick={toggle}>Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'inherit' }} id="helpIcon" tag={Link} to="/help" onClick={toggle}>
                <i className="fas fa-question-circle fa-lg"></i>
                <span className="sr-only">Help</span>
              </NavLink>
            </NavItem>
            <HoverToolTip placement='bottom' target='helpIcon' content='Help' />
            <NavItem>
              <NavLink style={{ color: 'inherit' }} id="settingsIcon" tag={Link} to="/settings" onClick={toggle}>
                <i className="fas fa-cog fa-lg"></i>
                <span className="sr-only">Settings</span>
                </NavLink>
            </NavItem>
            <HoverToolTip placement='bottom' target='settingsIcon' content='Settings' />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;