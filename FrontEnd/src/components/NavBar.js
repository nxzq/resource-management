import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Tooltip, UncontrolledPopover, PopoverBody, CustomInput } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = ({ toggleDarkTheme, DarkTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [helpToolTip, setHelpToolTip] = useState(false);
  const toggleHelpToolTip = () => setHelpToolTip(!helpToolTip);

  return (
    <div>
      <Navbar color="faded" expand="md">
        <NavbarBrand href="https://www.yash.com/">
          <img id="logo" alt="YASH Technologies" src="https://www.yash.com/wp-content/themes/Yash/images/yash-logo.svg" title="YASH Technologies" width="70" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink style={{ color: 'inherit' }} tag={Link} to="/">Overview</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'inherit' }} tag={Link} to="/resources">Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'inherit' }} id="helpIcon" tag={Link} to="/help"><i className="fas fa-question-circle fa-lg"></i></NavLink>
            </NavItem>
            <Tooltip placement="bottom" isOpen={helpToolTip} target="helpIcon" toggle={toggleHelpToolTip}>
              Help
            </Tooltip>
            <NavItem>
              <NavLink style={{ color: 'inherit' }} id="settingsIcon" ><i className="fas fa-cog fa-lg"></i></NavLink>
            </NavItem>
            <UncontrolledPopover className="themeToggle" trigger="legacy" placement="bottom" target="settingsIcon">
              <PopoverBody>
                <CustomInput style={{color: 'inherit'}} onChange={toggleDarkTheme} type="switch" checked={DarkTheme} id="darkModeSwitch" name="darkModeSwitch" label="Dark Mode (Beta)" />
              </PopoverBody>
            </UncontrolledPopover>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;