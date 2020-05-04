import React, { useEffect } from 'react';
import {
  Redirect,
  Route,
  withRouter,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';
import Development from './Development/Development';

function Pricing(props) {
  useEffect(() => {
    const { hash } = props.location;
    if (hash !== '') {
      props.history.replace('/');
    }
  }, []);
  return (
    <div className="row p-3 flex-column bg-info">
      {/* <Redirect to="/" /> */}
      <h3>Pricing Page</h3>
      <hr />

      <Route path={props.match.url + '/:DevelopmentType'}>
        <Development />
      </Route>
    </div>
  );
}

export default Pricing;
