import React from 'react';

function CountryCard({ country }) {
  return (
    <div
      className="card text-white bg-info mb-3 col-6"
      style={{ maxWidth: '18rem' }}
    >
      <div className="card-header">{country.Country}</div>
      <div className="card-body">
        <h5 className="card-title">ISO2 - {country.ISO2}</h5>
      </div>
    </div>
  );
}

export default CountryCard;
