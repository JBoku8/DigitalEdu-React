import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Countries from './components/Countries/Countries';
import NotFound from './components/NotFound';
import Main from './containers/Main/Main';
import Nav from './components/Header/Nav';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid p-4">
        <div className="container">
          <h2 className="text-muted">Main Page</h2>
          <h4 className="text-capitalize text-weight-bold mb-4">
            COVID-19 APP
          </h4>
          <Nav />
        </div>
        <hr />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/countries" component={Countries} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
