import React, { useContext } from 'react';
import Login from './Form/Login';
import Dashboard from './Dashboard/Dashboard';
import { AuthContext } from './context/authContext';
import './App.css';

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="container">
      <header className="row flex-column p-4">
        <h2>Welcome</h2>
      </header>
      {!isAuthenticated && <Login />}
      {isAuthenticated && <Dashboard />}
    </div>
  );
}

export default App;
