import React from 'react';
import { TITLE, DESCRIPTION } from '../constants';

function Header(props) {
  return (
    <header className="App-header">
      <h1 className="title">{TITLE}</h1>
      <h2 className="description">{DESCRIPTION}</h2>
    </header>
  );
}

export default Header;
