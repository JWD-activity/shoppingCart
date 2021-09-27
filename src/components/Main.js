import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from './Product';
import Container from 'react-bootstrap/Container';

function Main({ products, onAdd, children }) {
  const productList = products.map((product) => (
    <Product key={product.id} product={product} onAdd={onAdd}></Product>
  ));

  return (
    <main>
      <Container>
        <Row className='my-5'>
          <Col lg={8}>
            <h2 className='h4 text-primary'>Products</h2>
            <Row>{productList}</Row>
          </Col>
          <Col lg={4}>{children}</Col>
        </Row>
      </Container>
    </main>
  );
}

export default Main;
