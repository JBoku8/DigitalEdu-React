import React from 'react';
import PropTypes from 'prop-types';

import { API_BASE_URL } from '../../conf.dev';

function RouteCard({ route }) {
  const handleClick = (event) => {
    event.preventDefault();
  };

  if (!route) return null;
  return (
    <div className="card col-4 mt-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{route.Name}</h5>
        <p className="card-text">{route.Description}</p>
        <a
          href={`${API_BASE_URL}${route.Path}`}
          className="btn btn-primary"
          onClick={handleClick}
        >
          Show Data
        </a>
      </div>
    </div>
  );
}

RouteCard.defaultProps = {
  route: {
    Name: '',
    Description: '',
    Path: '',
  },
};

RouteCard.propTypes = {
  route: PropTypes.object.isRequired,
};

export default RouteCard;
