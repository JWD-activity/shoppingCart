import React, { useState } from 'react';
import Header from './components/Header';
import Basket from './components/Basket';
import Main from './components/Main';
import Footer from './components/Footer';
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

  const onRemove = (product) => {
    const foundProduct = cartItems.find((item) => item.id === product.id);

    if (foundProduct.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...foundProduct, qty: foundProduct.qty - 1 }
            : item
        )
      );
    }
  };

  const { products } = data;
  return (
    <div className='App'>
      <Header countCartItems={cartItems.length} />
      <Main onAdd={onAdd} products={products}>
        <Basket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
        ></Basket>
      </Main>
      <Footer author='JINOK' />
    </div>
  );
}

export default App;
