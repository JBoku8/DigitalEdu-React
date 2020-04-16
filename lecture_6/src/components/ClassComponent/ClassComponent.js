import React from 'react';

class ClassComponent extends React.Component {
  state = {
    clicks: 0,
    theme: 'bg-dark',
  };
  dt = new Date();

  handleClick = (event) => {
    this.setState((prevState) => {
      return {
        clicks: prevState.clicks + 1,
      };
    });
  };

  hanldeChangeTheme = (event) => {
    const { theme } = this.state;
    const newTheme = this.generateThemeName(theme);
    this.setState({
      theme: newTheme,
    });
  };

  generateThemeName(currentTheme) {
    if (currentTheme.startsWith('bg-primary')) {
      return 'bg-dark';
    }
    return 'bg-primary';
  }

  componentDidMount() {
    console.log('[ClassComponent.js] componentDidMount');
    // window.addEventListener('scroll', this.scrollListener);
  }

  scrollListener(event) {
    console.log('Scrolling');
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps);
    console.log('[ClassComponent.js] componentDidUpdate');
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    return true;
  }

  componentWillUpdate(args) {
    console.log('[ClassComponent.js] componentWillUpdate');
  }

  componentWillUnmount() {
    console.log('[ClassComponent.js] componentWillUnmount');
    // window.removeEventListener('scroll', this.scrollListener);
  }

  render() {
    const { theme, clicks } = this.state;

    return (
      <div className="row m-3 d-flex flex-column">
        <h2>{this.props.message}</h2>
        <h4>{this.dt.toLocaleDateString()}</h4>
        <button
          className="btn btn-default btn-info"
          onClick={this.hanldeChangeTheme}
        >
          Change Theme to {this.generateThemeName(theme)}
        </button>
        <br />
        <h4
          className={`${theme} text-white p-4 text-center`}
          style={{
            cursor: 'pointer',
          }}
          onClick={this.handleClick}
        >
          {clicks}
        </h4>
      </div>
    );
  }
}

export default ClassComponent;
