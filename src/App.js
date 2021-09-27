import React from 'react';
import Header from './components/Header';
import Basket from './components/Basket';
import Main from './components/Main';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Row>
        <Main></Main>
        <Basket></Basket>
      </Row>
    </div>
  );
}

export default App;
