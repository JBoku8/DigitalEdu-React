import React from 'react';

function Home(props) {
  const { setIsAuth } = props;
  return (
    <div className="row p-3 flex-column bg-dark">
      <h3 className="text-white">Home Page</h3>
      <button className="btn btn-primary" onClick={setIsAuth}>
        Set Auth
      </button>
    </div>
  );
}

export default Home;
