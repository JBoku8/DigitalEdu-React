import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProtected from './context/authContext';

// import conf from './conf';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// api.dev.example.com
// api.prod.example.com
// const config = conf[process.env.NODE_ENV];
// console.log(config);

ReactDOM.render(
  <React.StrictMode>
    <AuthProtected>
      <App />
    </AuthProtected>
  </React.StrictMode>,
  document.getElementById('root')
);
