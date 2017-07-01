import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, Col } from 'react-bootstrap';

const Navigation = () => (
  <Navbar inverse collapseOnSelect>
    <Col xs={18}>
      <Navbar.Header>
        <NavbarBrand>
          <a href="/">Weather</a>
        </NavbarBrand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="https://github.com/ykirill/weather" target="_blank">My Repo</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Col>
  </Navbar>
);

export default Navigation;
