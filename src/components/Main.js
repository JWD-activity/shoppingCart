import React from 'react';
import Col from 'react-bootstrap/Col';
import Product from './Product';

function Main({ products }) {
  const productList = products.map((product) => (
    <Product key={product.id} product={product}></Product>
  ));

  return (
    <main>
      <Col>
        <h2>Products</h2>
        {productList}
      </Col>
    </main>
  );
}

export default Main;
