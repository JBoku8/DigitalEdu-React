import React from 'react';

function FunctionComponent(props) {
  const { message } = props;
  const dt = new Date();
  return (
    <div className="row m-3 d-flex flex-column">
      <h2>{message}</h2>
      <h4>{dt.toDateString()}</h4>
    </div>
  );
}

export default FunctionComponent;
