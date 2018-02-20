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
              <Link to="/">Bingo</Link>
            </Navbar.Brand>
          </LinkContainer>
        </Navbar.Header>
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

        </Nav>
      </Navbar>
    );
  }
}
