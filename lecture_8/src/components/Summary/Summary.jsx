import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner';
import Table from '../Table';

import { API_SUMMARY_URL } from '../../conf.dev';

function Summary(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [cases, setCases] = useState([]);
  const [globals, setGlobals] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_SUMMARY_URL}`)
      .then((response) => {
        const globalInfo = { ...response.data['Global'] };
        globalInfo.Date = response.data['Date'];
        const filtered = response.data['Countries']
          .filter((item) => {
            return item.NewConfirmed > 0;
          })
          .sort((a, b) => {
            return b.TotalRecovered - a.TotalRecovered;
          });

        setCases(filtered);
        setGlobals(globalInfo);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('[Countries.jsx]', err.message);
        setHasError(true);
        setIsLoading(false);
      });
  }, []);

  let globalInfoContent = null;
  if (globals) {
    globalInfoContent = (
      <div className="row row-cols-12 justify-content-between flex-column">
        <h4>New Confirmed - {globals.NewConfirmed}</h4>
        <h4>Total Confirmed - {globals.TotalConfirmed}</h4>
        <h4>New Deaths - {globals.NewDeaths}</h4>
        <h4>Total Deaths - {globals.TotalDeaths}</h4>
        <h4>New Recovered - {globals.NewRecovered}</h4>
        <h4>Total Recovered - {globals.TotalRecovered}</h4>
        <h4>Date - {new Date(globals.Date).toLocaleTimeString()}</h4>
      </div>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (hasError) {
    return (
      <div className="alert alert-danger" role="alert">
        Something went wrong
      </div>
    );
  }

  return (
    <div className="d-flex flex-column">
      <div className="container">{globalInfoContent}</div>
      <hr />
      <Table cases={cases} />
    </div>
  );
}

export default Summary;
