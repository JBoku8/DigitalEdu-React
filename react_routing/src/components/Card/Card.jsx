import React from 'react';
import { withRouter } from 'react-router-dom';

function Card(props) {
  // console.log(props.history);
  const handleRedirect = (url) => {
    // props.history.push(url);
    // props.history.push({
    //   pathname: url,
    //   hash: 'Test-Hash',
    // });
  };
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        {props.children}
        {/* <a
          href="#"
          className="card-link"
          onClick={(e) => {
            e.preventDefault();
            handleRedirect('/');
          }}
        >
          Go Home
        </a>
        <a
          href="#"
          className="card-link"
          onClick={(e) => {
            e.preventDefault();
            handleRedirect('/Pricing');
          }}
        >
          Go Pricing
        </a> */}
      </div>
    </div>
  );
}

export default withRouter(Card);
