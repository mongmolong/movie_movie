import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "../css/NavTab.css";

function NavTabs() {
  return (
    <Nav className="mt-2" variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <LinkContainer to="/">
          <Nav.Link>MOVIE</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/tv">
          <Nav.Link>TV</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
}

export default NavTabs;
