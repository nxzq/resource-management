import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto"><img style={{marginTop: '15px', marginLeft: '15px'}} alt="YASH Technologies" src="https://www.yash.com/wp-content/themes/Yash/images/yash-logo.svg" title="YASH Technologies" width="130"/>
</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
          <NavItem>
              <NavLink href="/">Overview</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resources">Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resourceform">Add Resource Form</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/addjob">Add Job</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;