import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from './Product';
import Container from 'react-bootstrap/Container';

function Main({ products, children }) {
  const productList = products.map((product) => (
    <Product key={product.id} product={product}></Product>
  ));

  return (
    <main>
      <Container>
        <Row className='my-5'>
          <Col lg={8}>
            <h2 className='h4 text-primary'>Products</h2>
            <Row>{productList}</Row>
          </Col>
          <Col lg={3}>{children}</Col>
        </Row>
      </Container>
    </main>
  );
}

export default Main;
