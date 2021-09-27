import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Product.module.css';

function Product({ product }) {
  return (
    <Col>
      <Image
        src={product.image}
        alt={product.name}
        rounded
        className={styles.img}
      />
      <h3>{product.name}</h3>
      <div>${product.price}</div>

      <Button variant='primary'>Add To Cart</Button>
    </Col>
  );
}

export default Product;
