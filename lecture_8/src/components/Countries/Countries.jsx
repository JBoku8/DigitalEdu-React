import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import CountryCard from '../Card/CountryCard';
import Spinner from '../Spinner';

import { API_BASE_URL } from '../../conf.dev';

function Countries(props) {
  const { apiPath } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}${apiPath}`)
      .then((response) => {
        setCountries(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('[Countries.jsx]', err.message);
      });
  }, []);

  let countryCards = null;
  if (!isLoading && countries.length) {
    countryCards = countries.map((country) => {
      return <CountryCard key={country.ISO2} country={country} />;
    });
  }
  return (
    <div className="row row-cols-12 m-3 flex-column">
      {isLoading ? <Spinner /> : null}
      <div className="w-100 row row-cols-12">{countryCards}</div>
    </div>
  );
}

Countries.propTypes = {
  apiPath: PropTypes.string.isRequired,
};

export default Countries;
