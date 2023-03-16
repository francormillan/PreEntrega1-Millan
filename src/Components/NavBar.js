import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBarr() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">TecnoMania</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Laptops</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Smartphones</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Tablets</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Accesorios</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarr;

