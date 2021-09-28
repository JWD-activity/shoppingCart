import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer({ author }) {
  return (
    <footer>
      <Container className='text-center' fluid={'md'}>
        <small className='text-muted py-4'>
          MADE WITH ❤ 2021 CODED BY {author}
        </small>
      </Container>
    </footer>
  );
}

export default Footer;
