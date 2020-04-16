import React, { useState } from 'react';
import Welcome from './components/Welcome';
import DarkComponent from './components/DarkComponent';
import HookComponent from './components/HookComponent/HooKComponent';
import ClassComponent from './components/ClassComponent/ClassComponent';
import FunctionComponent from './components/FunctionComponent/FunctionComponent';

import Person from './classes/Person';
import Developer from './classes/Developer';

// HOC

import './App.css';

function App() {
  const [showComponent, setShowComponent] = useState(true);

  const hanldeClick = (event) => {
    setShowComponent(!showComponent);
  };

  return (
    <div className="container d-flex flex-column mt-6">
      <h2 className="text-muted text-center" onClick={hanldeClick}>
        React Component Types
      </h2>
      <Welcome />
      <hr />
      <FunctionComponent message="ReactJs, Functional Component" />
      <hr />
      <ClassComponent message="ReactJs, Class Component" />
      <hr />
      {showComponent && <HookComponent />}
    </div>
  );
}

export default App;
