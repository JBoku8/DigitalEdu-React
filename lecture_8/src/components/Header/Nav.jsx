import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact activeClassName="active">
          მთავარი
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/countries" activeClassName="active">
          ქვეყნები
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
