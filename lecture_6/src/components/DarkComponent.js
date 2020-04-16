import React from 'react';

function DarkComponent(props) {
  return (
    <div className="container-fluid p-5 m-3 bg-dark flex-column text-white">
      {props.children}
    </div>
  );
}

export default DarkComponent;
