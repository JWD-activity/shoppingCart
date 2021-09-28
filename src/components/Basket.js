import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Basket({ cartItems, onAdd, onRemove }) {
  const itemsPrice = cartItems.reduce(
    (total, currentItem) => total + currentItem.price * currentItem.qty,
    0
  );
  const taxPrice = itemsPrice * 0.1;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside>
      <Col className='px-3'>
        <h1 className='h4 text-primary'>Cart Items</h1>
        {cartItems.length === 0 ? (
          <p>Cart is empty!</p>
        ) : (
          <div className='bg-light p-3 my-4'>
            {cartItems.map((item) => (
              <Row key={item.id} className='align-items-center my-3 '>
                <Col>{item.name}</Col>
                <Col>
                  <Button
                    variant='warning'
                    className='me-2'
                    onClick={() => onAdd(item)}
                  >
                    +
                  </Button>
                  <Button variant='primary' onClick={() => onRemove(item)}>
                    -
                  </Button>
                </Col>
                <Col className='text-end'>
                  {item.qty} x ${item.price.toFixed(2)}
                </Col>
              </Row>
            ))}
            <Row className='border-top py-3'>
              <Col>Item Price</Col>
              <Col className='text-end'>${itemsPrice.toFixed(2)}</Col>
            </Row>
            <Row className='py-3'>
              <Col>Tax Price</Col>
              <Col className='text-end'>${taxPrice.toFixed(2)}</Col>
            </Row>
            <Row className='py-3'>
              <Col>Shipping Price</Col>
              <Col className='text-end'>${shippingPrice.toFixed(2)}</Col>
            </Row>
            <Row className='py-3 fw-bold'>
              <Col>Total Price</Col>
              <Col className='text-end'>${totalPrice.toFixed(2)}</Col>
            </Row>
            <Row className='py-3'>
              <Button type='button' variant='warning'>
                Checkout
              </Button>
            </Row>
          </div>
        )}
      </Col>
    </aside>
  );
}

export default Basket;
