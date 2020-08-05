import React, { useState, useContext, useEffect, useRef } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'
import HoverToolTip from '../HoverToolTip/HoverToolTip'
import Logo from '../../../img/generic-logo.svg'
import DarkThemeLogo from '../../../img/generic-logo-dark.svg'
import { ThemeContext } from '../../../contexts/theme/ThemeContext'

const NavBar = (props) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ helpReady, setHelpReady ] = useState(false)
  const [ settingsReady, setSettingsReady ] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const { dark } = useContext(ThemeContext)
  const helpRef = useRef()
  const settingsRef = useRef()

  const handleKeyDown = (e) => {
    if (e.shiftKey && e.which === 79) {
      props.history.push('/')
    } else if (e.shiftKey && e.which === 82) {
      props.history.push('/resources')
    } else if (e.shiftKey && e.which === 72) {
      props.history.push('/help')
    } else if (e.shiftKey && e.which === 83) {
      props.history.push('/settings')
    }
  }

  useEffect(() => {
    if (helpRef.current) {
      setHelpReady(true)
    }
    // eslint-disable-next-line
  }, [helpRef.current])

  useEffect(() => {
    if (settingsRef.current) {
      setSettingsReady(true)
    }
    // eslint-disable-next-line
  }, [settingsRef.current])

  const close = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Navbar color="faded" light={!dark} dark={dark} expand="md">
        <NavbarBrand>
          {dark ? 
            <img alt="Company Logo" src={DarkThemeLogo} width="150" /> : 
            <img alt="Company Logo" src={Logo} width="150" />}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2"/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink style={{ color: 'inherit' }} tag={Link} to="/" onClick={close}>Overview</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'inherit' }} tag={Link} to="/resources" onClick={close}>Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'inherit' }} id={helpRef} tag={Link} to="/help" onClick={close} data-testid="helpNav">
                <i className="fas fa-question-circle fa-lg"></i>
                <span className="sr-only">Help</span>
              </NavLink>
            </NavItem>
            {helpReady &&
            <HoverToolTip placement='bottom' target={helpRef.current} content='Help' />}
            <NavItem>
              <NavLink style={{ color: 'inherit' }} id={settingsRef} tag={Link} to="/settings" onClick={close} data-testid="settingsNav">
                <i className="fas fa-cog fa-lg"></i>
                <span className="sr-only">Settings</span>
              </NavLink>
            </NavItem>
            {settingsReady && 
            <HoverToolTip placement='bottom' target={settingsRef} content='Settings' />}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default React.memo(withRouter(NavBar))