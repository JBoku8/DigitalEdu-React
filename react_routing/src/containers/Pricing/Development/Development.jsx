import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../../../components/Card/Card';
import authContext from '../../../context/authContext';

const Development = (props) => {
  const { DevelopmentType } = props.match.params;
  const isAuth = useContext(authContext);

  return (
    <div className="row row-cols-3">
      {DevelopmentType == 'Web' ? (
        <Card>
          <h5 className="card-title">Web Development</h5>
          <h6 className="card-subtitle mb-2 text-muted">Web Development</h6>
        </Card>
      ) : null}

      {DevelopmentType == 'Mobile' ? (
        <Card>
          <h5 className="card-title">Mobile Development</h5>
          <h6 className="card-subtitle mb-2 text-muted">Mobile Development</h6>
        </Card>
      ) : null}

      {isAuth && DevelopmentType === 'Software' ? (
        <Card>
          <h5 className="card-title">Software Development</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Software Development
          </h6>
        </Card>
      ) : null}
    </div>
  );
};

export default withRouter(Development);
