import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Header from './components/presentation/Header';
import Content from './components/presentation/Content';

import types from './types';

import './App.css';

function App() {
  const [colorClicks, setColorClicks] = useState(null);

  useEffect(() => {
    const stateObject = {};
    types.forEach((key) => {
      stateObject[key] = {
        count: 0,
        limit: Math.round(Math.random() * 20),
        price: Math.round(Math.random() * 10000),
      };
    });
    setTimeout(() => {
      setColorClicks(stateObject);
    }, 2000);
  }, []);

  // useEffect(() => {
  //   console.log(colorClicks);
  // }, [colorClicks]);

  return (
    <Container className="p-6">
      <Header colorClicks={colorClicks} />
      <Content colorClicks={colorClicks} setColorClicks={setColorClicks} />
    </Container>
  );
}

export default App;
