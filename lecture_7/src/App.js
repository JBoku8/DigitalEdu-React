import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Header from './components/presentation/Header';
import Content from './components/presentation/Content';

import types from './types';

import './App.css';

function App() {
  const [colorClicks, setColorClicks] = useState(null);
  const [cart, setCart] = useState({
    totalPrice: 0,
    totalCount: 0,
  });

  useEffect(() => {
    const stateObject = {};
    types.forEach((key) => {
      stateObject[key] = {
        count: 0,
        limit: Math.round(Math.random() * 20),
        price: Math.round(Math.random() * 10000),
      };
    });
    // setTimeout(() => {
    setColorClicks(stateObject);
    // }, 2000);
  }, []);

  useEffect(() => {
    let totalCount = 0;
    let totalPrice = 0;

    // for (const key in colorClicks) {
    //   totalCount += colorClicks[key].count;
    //   totalPrice += colorClicks[key].price * colorClicks[key].count;
    // }

    // if (colorClicks) {
    //   for (const value of Object.values(colorClicks)) {
    //     totalCount += value.count;
    //     totalPrice += value.price * value.count;
    //   }
    // }

    if (colorClicks) {
      for (const [, value] of Object.entries(colorClicks)) {
        totalCount += value.count;
        totalPrice += value.price * value.count;
      }
    }

    setCart({
      totalCount,
      totalPrice,
    });
  }, [colorClicks]);

  return (
    <Container className="p-6">
      <Header colorClicks={colorClicks} />
      <div className="row p-4 m-3">
        <pre>{JSON.stringify(cart, null, 2)}</pre>
      </div>
      <Content
        colorClicks={colorClicks}
        setColorClicks={setColorClicks}
        // cart={cart}
        // setCart={setCart}
      />
    </Container>
  );
}

export default App;
