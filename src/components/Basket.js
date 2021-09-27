import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Basket({ cartItems, onAdd, onRemove }) {
  console.log('cartItems:', cartItems);
  // const ItemList =
  //   cartItems.length !== 0 &&
  //   cartItems.map((item) => {
  //     <Row key={item.id}>
  //       <Col>{item.name}</Col>
  //       <Col>
  //         <Button variant='danger' onClick={() => onAdd(item)}>
  //           +
  //         </Button>
  //         <Button variant='danger' onClick={() => onRemove(item)}>
  //           -
  //         </Button>
  //       </Col>
  //       <Col>
  //         {item.qty} x ${item.price.toFixed(2)}
  //       </Col>
  //     </Row>;
  //   });

  return (
    <aside>
      <Col className='px-3'>
        <h2 className='h4 text-primary'>Cart Items</h2>
        {cartItems.length === 0 ? (
          <p>Cart is empty!</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <Row key={item.id} className='align-items-center'>
                <Col>{item.name}</Col>
                <Col>
                  <Button variant='warning' onClick={() => onAdd(item)}>
                    +
                  </Button>
                  <Button variant='primary' onClick={() => onRemove(item)}>
                    -
                  </Button>
                </Col>
                <Col>
                  {item.qty} x ${item.price.toFixed(2)}
                </Col>
              </Row>
            ))}
          </>
        )}
      </Col>
    </aside>
  );
}

export default Basket;
