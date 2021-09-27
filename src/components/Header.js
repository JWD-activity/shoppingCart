import React from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <header>
      <Navbar bg='light'>
        <Container>
          <Navbar.Brand href='#'>Small Shopping Cart</Navbar.Brand>
          <Nav>
            <Nav.Link href='#'>Cart</Nav.Link>
            <Nav.Link href='#'>SignIn</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
