import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

import CustomAlert from '../Alert';
import CustomButton from '../Button';

import types from '../../types';

function Content({ colorClicks, setColorClicks }) {
  const handleButtonClick = (type) => {
    // console.log('[Content.jsx], Button Type is', type);
    // console.log('Click Count', colorClicks[type]);
    // console.log({ ...colorClicks, [type]: colorClicks[type] + 1 });
    if (colorClicks[type].limit > 0) {
      setColorClicks({
        ...colorClicks,
        [type]: {
          count: colorClicks[type].count + 1,
          limit: colorClicks[type].limit - 1,
          price: colorClicks[type].price,
        },
      });
    }
  };

  return (
    <React.Fragment>
      {colorClicks &&
        types.map((alertType, index) => {
          return (
            <Row
              key={`${alertType}-${index}`}
              className={`m-3 mb-5 d-flex flex-column border p-3 ${
                colorClicks[alertType].limit === 0 ? 'border-danger' : ''
              }`}
            >
              <CustomAlert
                type={alertType}
                message={`Price - ${
                  colorClicks[alertType].price
                }, ${alertType} ${JSON.stringify(colorClicks[alertType])}`}
              />
              <CustomButton
                type={alertType}
                text={alertType}
                disabled={colorClicks[alertType].limit === 0}
                onClick={(event) => {
                  handleButtonClick(alertType);
                }}
              />
            </Row>
          );
        })}
    </React.Fragment>
  );
}

Content.propTypes = {
  colorClicks: PropTypes.object,
  setColorClicks: PropTypes.func.isRequired,
};

export default Content;
