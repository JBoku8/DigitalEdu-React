import React from 'react';
import PropTypes from 'prop-types';

function CustomAlert({ type, message }) {
  return (
    <React.Fragment>
      <div className={`alert alert-${type}`}>{message}</div>
    </React.Fragment>
  );
}

CustomAlert.defaultProps = {
  type: 'primary',
  message: '',
};

CustomAlert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default CustomAlert;
