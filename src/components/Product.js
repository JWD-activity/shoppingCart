import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Product({ product }) {
  return (
    <Col>
      <Card className='border-0 shadow'>
        <Card.Img variant='top' src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Button variant='danger'>Add To Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;
