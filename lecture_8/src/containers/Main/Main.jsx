import React, { useState, useEffect } from 'react';
// import AllRoutes from '../../components/AllRoutes/AllRoutes';
import Summary from '../../components/Summary/Summary';

function Main(props) {
  return (
    <div className="row row-cols-12 m-3 flex-column">
      <Summary />
    </div>
  );
}

export default Main;
