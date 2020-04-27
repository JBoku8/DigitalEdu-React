import React from 'react';

function Spinner(props) {
  return (
    <div className="spinner-border text-danger align-self-center" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;
