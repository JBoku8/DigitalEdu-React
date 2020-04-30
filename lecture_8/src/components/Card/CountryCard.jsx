import React from 'react';
import { Link } from 'react-router-dom';

function CountryCard({ country }) {
  return (
    <div
      className="card text-white bg-info mb-3 col-6"
      style={{ maxWidth: '18rem' }}
    >
      <div className="card-header">{country.Country}</div>
      <div className="card-body">
        <h5 className="card-title">
          <Link
            to={`/countries/${country.Slug}`}
            className="text-white text-decoration-none"
          >
            Get List Of Cases
          </Link>
        </h5>
      </div>
    </div>
  );
}

export default CountryCard;
