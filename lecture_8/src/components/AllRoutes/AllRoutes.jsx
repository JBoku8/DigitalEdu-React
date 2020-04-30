import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import RouteCard from '../Card/RouteCard';
import Spinner from '../Spinner';

import { API_BASE_URL } from '../../conf.dev';

function AllRoutes(props) {
  const [allRoutes, setAllRoutes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_BASE_URL)
      .then((response) => {
        if (response.data) {
          setAllRoutes(Object.values(response.data));
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error('[AllRoutes.jsx]', err.message);
      });
  }, []);

  let RouteCards = null;
  if (!isLoading && allRoutes.length) {
    RouteCards = allRoutes.map((route) => {
      return <RouteCard key={route.Path} route={route} />;
    });
  }

  return (
    <div className="row row-cols-12 m-3 flex-column">
      {isLoading ? <Spinner /> : null}
      <div className="w-100 row row-cols-12">{RouteCards}</div>
    </div>
  );
}

// AllRoutes.propTypes = {
// };

export default AllRoutes;
