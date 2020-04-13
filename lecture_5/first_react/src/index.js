import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// const h1 = React.createElement('h1', {}, 'Hello ReactJS');
// const div = React.createElement('div', { className: 'App' }, h1);

function FirstComponent() {
  const h1 = <h1>Hello ReactJS</h1>;
  const div = <div className="App">{h1}</div>;
  return div;
}

function SecondComponent() {
  return (
    <div className="App">
      <h1>Hello From SecondComponent</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
