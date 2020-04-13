import React from 'react';

import Footer from './components/Footer';
import Content from './components/Content';
import Header from './components/Header';

import './App.css';

// Header,
// Content,
// Footer

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
