import React from 'react';
import { FooterTitle } from '../constants';

function Footer(props) {
  return (
    <footer>
      <h2>{FooterTitle}</h2>
      <p>&copy; 2020</p>
    </footer>
  );
}

export default Footer;
