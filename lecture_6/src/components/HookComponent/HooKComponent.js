import React, { useState, useEffect } from 'react';

function HookComponent(props) {
  const [clicks, setClicks] = useState(0);
  const [theme, setTheme] = useState('bg-primary');

  const dt = new Date();

  const handleClick = (event) => {
    setClicks(clicks + 1);
  };

  const hanldeChangeTheme = (event) => {
    const newTheme = generateThemeName(theme);
    setTheme(newTheme);
  };

  const generateThemeName = (currentTheme) => {
    if (currentTheme.startsWith('bg-primary')) {
      return 'bg-dark';
    }
    return 'bg-primary';
  };

  const scrollListener = (event) => {
    console.log('Scrolling');
  };

  useEffect(() => {
    console.log('[HookComponent.js] rendering');
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="row m-3 d-flex flex-column">
      <h2>{props.message}</h2>
      <h4>{dt.toLocaleDateString()}</h4>
      <button className="btn btn-default btn-info" onClick={hanldeChangeTheme}>
        Change Theme to {generateThemeName(theme)}
      </button>
      <br />
      <h4
        className={`${theme} text-white p-4 text-center`}
        style={{
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        {clicks}
      </h4>
    </div>
  );
}

export default HookComponent;
