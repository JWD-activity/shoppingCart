import React from 'react';
import Header from './components/Header';
import Basket from './components/Basket';
import Main from './components/Main';
import data from './data';

function App() {
  const { products } = data;
  return (
    <div className='App'>
      <Header />
      <Main products={products}>
        <Basket></Basket>
      </Main>
    </div>
  );
}

export default App;
