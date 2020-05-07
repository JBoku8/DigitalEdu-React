import React, { useContext, useReducer } from 'react';
import { AuthContext } from '../context/authContext';
import counterReducer from '../reducer/counter';
import { ACTION_MINUS, ACTION_RESET, ACTION_PLUS } from '../constans/actions';

function Dashboard(props) {
  const { logOut } = useContext(AuthContext);
  const [counter, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div className="row row-cols-12 flex-column p-4 bg-primary">
      <h2>Admin Dashboard Page</h2>
      <h4>Dashboard</h4>
      <br />
      <button
        className="btn btn-light col-3"
        onClick={() => {
          logOut();
        }}
      >
        Logout
      </button>
      <br />
      <div className="row flex-column p-4 bg-light">
        <h2>Count - {counter.count}</h2>
        <button
          className="btn btn-success"
          onClick={() => {
            dispatch({ type: ACTION_PLUS });
          }}
        >
          PLUS
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch({ type: ACTION_MINUS });
          }}
        >
          MINUS
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            dispatch({ type: ACTION_RESET });
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
