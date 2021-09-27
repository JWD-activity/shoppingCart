import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from './Product';

function Main({ products }) {
  const productList = products.map((product) => (
    <Product key={product.id} product={product}></Product>
  ));

  return (
    <main>
      <h2>Products</h2>
      {productList}
    </main>
  );
}

export default Main;
