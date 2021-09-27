import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function Product({ product }) {
  return (
    <Col>
      <Image src={product.image} alt={product.name} rounded />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <Button variant='primary'>Add To Cart</Button>
      </div>
    </Col>
  );
}

export default Product;
