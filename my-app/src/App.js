import React from 'react';
import Navigation from './components/Navigation/Navigation';

import { useAsync } from './hooks/useAsync';

import './App.css';

const lazyFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5 ? resolve('Successfully resolved') : reject('Denied, Rejected');
    }, 2000);
  });
};

function App() {
  const { result, isLoading, excuteAsyncFunction, error } = useAsync(
    lazyFunction,
    true
  );

  return (
    <div className="container">
      <Navigation isAuth />
      <hr />
      <section>
        {result && <h2 style={{ color: 'seagreen' }}>{result}</h2>}
        {error && <h4 style={{ color: 'red' }}>{error}</h4>}
        <hr />
        <button onClick={excuteAsyncFunction} disabled={isLoading}>
          {!isLoading ? 'Click the Button' : 'Loading...'}
        </button>
      </section>
    </div>
  );
}

export default App;
