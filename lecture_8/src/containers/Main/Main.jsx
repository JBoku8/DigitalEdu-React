import React, { useState, useEffect } from 'react';
import AllRoutes from '../../components/AllRoutes/AllRoutes';
import Countries from '../../components/Countries/Countries';

function Main(props) {
  const [apiPath, setAPIPath] = useState('');

  useEffect(() => {
    console.log('[Main.jsx]', apiPath);
  }, [apiPath]);

  return (
    <div className="row row-cols-12 m-3 p-4 flex-column">
      <h2 className="text-muted">Main Page</h2>
      <h4 className="text-capitalize text-weight-bold">COVID-19 APP</h4>
      <hr />
      {apiPath === '' ? (
        <AllRoutes setAPIPath={setAPIPath} />
      ) : (
        <Countries apiPath={apiPath} />
      )}
    </div>
  );
}

export default Main;
