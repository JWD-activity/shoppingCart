import React, { useState } from 'react';
import Header from './components/Header';
import Basket from './components/Basket';
import Main from './components/Main';
import data from './data';
import './assets/scss/custom.scss';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const { products } = data;
  return (
    <div className='App'>
      <Header />
      <Main products={products}>
        <Basket cartItems={cartItems}></Basket>
      </Main>
    </div>
  );
}

export default App;
