import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import axios from 'axios';
import CountryCard from '../Card/CountryCard';
import CountryDetail from '../Countries/Country/Detail';
import Spinner from '../Spinner';

import { API_COUNTRIES_URL } from '../../conf.dev';

function Countries(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  // console.log('[Countries.jsx] props', props);

  const { path } = props.match;

  useEffect(() => {
    axios
      .get(API_COUNTRIES_URL)
      .then((response) => {
        const filtered = response.data.filter((item) => {
          return item.Country.startsWith('B');
        });
        setCountries(filtered);
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

      <Route
        path={path}
        exact
        render={() => {
          return <div className="w-100 row row-cols-12">{countryCards}</div>;
        }}
      />
      <Route path={`${path}/:country`} component={CountryDetail} />
    </div>
  );
}

Countries.propTypes = {};

export default Countries;
