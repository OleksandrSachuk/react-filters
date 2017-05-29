import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
  return (
    <Nav>
      <LinkContainer to="/">
        <NavItem eventKey={1}>
          Home
        </NavItem>
      </LinkContainer>

      <LinkContainer to="/filters">
        <NavItem eventKey={2}>
          Filters
        </NavItem>
      </LinkContainer>

      <LinkContainer to="/results">
        <NavItem eventKey={3}>
          Results
        </NavItem>
      </LinkContainer>
    </Nav>
  )
};

export default Navigation;
