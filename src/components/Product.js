import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Product({ product, onAdd }) {
  return (
    <Col lg={4} md={10}>
      <Card className='border-0 shadow my-3'>
        <Card.Img variant='top' src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Button type='button' variant='danger' onClick={() => onAdd(product)}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;
