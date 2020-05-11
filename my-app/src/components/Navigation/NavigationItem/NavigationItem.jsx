import React from 'react';

import classes from './NavigationItem.module.css';

function NavigationItem({ title, href }) {
  return (
    <li className={classes.Item}>
      <a href={`#${href}`}>{title}</a>
    </li>
  );
}

export default NavigationItem;
