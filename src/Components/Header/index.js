import React, { Component } from 'react';

// import nav components from react-bootstrap
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

import {Link} from 'react-router-dom';

import {
  LinkContainer
} from 'react-router-bootstrap';


export default class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Link to="/">
                <img style={{maxHeight: "100%"}} src={"/images/logo/logo-100px.png"} alt=""/>
              </Link>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer exact activeClassName="active" to="/">
              <NavItem>Home</NavItem>
            </LinkContainer>

            <LinkContainer activeClassName="active" to="/about">
              <NavItem>About</NavItem>
            </LinkContainer>

            <LinkContainer activeClassName="active" to="/contact">
              <NavItem>Contact</NavItem>
            </LinkContainer>

            <LinkContainer activeClassName="active" to="/cards">
              <NavItem>Cards</NavItem>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
