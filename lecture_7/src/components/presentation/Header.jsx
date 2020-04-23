import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

import types from '../../types';

function Header({ colorClicks }) {
  return (
    <Row className="m-3 mb-2 d-flex flex-row-reverse justify-content-end header">
      {colorClicks &&
        types.map((type, index) => {
          return (
            <div
              className={`p-3 bg-${type} clickable`}
              style={{
                order: colorClicks[type].count,
              }}
              key={`${type}-${index}`}
            >
              {type} - <pre>{JSON.stringify(colorClicks[type], null, 2)}</pre>
            </div>
          );
        })}
    </Row>
  );
}

Header.propTypes = {
  colorClicks: PropTypes.object,
};

export default Header;
