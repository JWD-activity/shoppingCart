import React from 'react';
import Header from './components/Header';
import Basket from './components/Basket';
import Main from './components/Main';
import Row from 'react-bootstrap/Row';
import data from './data';

function App() {
  const { products } = data;
  return (
    <div className='App'>
      <Header></Header>
      <Row>
        <Main products={products}></Main>
        <Basket></Basket>
      </Row>
    </div>
  );
}

export default App;
