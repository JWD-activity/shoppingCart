import React from 'react';
import Col from 'react-bootstrap/Col';

function Basket({ children, cartItems }) {
  return (
    <aside>
      <Col>
        <h2 className='h4 text-primary'>Cart Items</h2>
        {cartItems.length === 0 ? <p>Cart is empty!</p> : ''}
      </Col>
    </aside>
  );
}

export default Basket;
