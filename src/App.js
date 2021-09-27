import React, { useState } from 'react';
import Header from './components/Header';
import Basket from './components/Basket';
import Main from './components/Main';
import data from './data';
import './assets/scss/custom.scss';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const foundProduct = cartItems.find((item) => item.id === product.id);

    console.log(foundProduct);

    if (foundProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...foundProduct, qty: foundProduct.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const { products } = data;
  return (
    <div className='App'>
      <Header />
      <Main onAdd={onAdd} products={products}>
        <Basket onAdd={onAdd} cartItems={cartItems}></Basket>
      </Main>
    </div>
  );
}

export default App;
