import React from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

function Header({ countCartItems }) {
  return (
    <header>
      <Navbar bg='primary' className='p-4'>
        <Container>
          <Navbar.Brand href='#' className='text-light'>
            Small Shopping Cart
          </Navbar.Brand>
          <Nav>
            <Nav.Link href='#' className='text-light pe-4'>
              Cart{' '}
              <Badge bg='warning' className='text-primary'>
                {countCartItems}
              </Badge>
            </Nav.Link>
            <Nav.Link href='#' className='text-light'>
              SignIn
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
