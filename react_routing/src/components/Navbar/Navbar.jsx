import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import authContext from '../../context/authContext';

function Navbar(props) {
  const isAuth = useContext(authContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={{
                pathname: '/',
              }}
              exact
              activeClassName="my-active"
              activeStyle={{
                color: 'yellowgreen',
              }}
            >
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          {isAuth && (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={{
                  pathname: '/Features',
                  // hash: 'Web-Development',
                  // search: 's=javascript&page=3',
                }}
                activeClassName="my-active"
                activeStyle={{
                  color: 'seagreen',
                }}
              >
                Features
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/Pricing"
              activeClassName="my-active"
              activeStyle={{
                color: 'red',
              }}
            >
              Pricing
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
