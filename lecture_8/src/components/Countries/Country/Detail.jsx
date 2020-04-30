import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Spinner from '../../Spinner';
import Table from '../../Table';

import { API_COUNTRY_URL } from '../../../conf.dev';

function CountryDetail(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [cases, setCases] = useState([]);
  useEffect(() => {
    const { params } = props.match;
    axios
      .get(`${API_COUNTRY_URL}/${params.country}`)
      .then((response) => {
        const filtered = response.data
          .filter((item) => {
            return item.Confirmed > 0;
          })
          .sort((a, b) => {
            return b.Recovered - a.Recovered;
          });
        setCases(filtered);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('[Countries.jsx]', err.message);
      });
  }, []);
  return (
    <React.Fragment>
      <Link to={'/countries'}>Go Back</Link>
      {isLoading && <Spinner />}
      {!isLoading && <Table cases={cases} />}
    </React.Fragment>
  );
}

export default CountryDetail;
