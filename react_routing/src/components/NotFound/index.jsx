import React from 'react';
import styled from 'styled-components';

const myName = 'Jano';
const yourName = 'Javascript';

const templateName = (str) => {
  return `My Name is - ${str.raw[0].toUpperCase()}`;
};

const result = templateName`SuperMan`;

const AlertComponent = styled.div`
  font-family: Verdana, sans-serif;
`;
function NotFound(props) {
  return (
    <div className="row flex-column p-3">
      {/* <div className="alert alert-danger">Something went wrong...</div> */}
      <AlertComponent className="alert alert-danger">
        Something went wrong...
      </AlertComponent>
    </div>
  );
}

export default NotFound;
