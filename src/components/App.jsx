import React, { Component } from 'react';

const propTypes = {
  children: React.PropTypes.element,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      postalCode: '1234567',
    };
  }
  render() {
    const childrenWithProps = React.cloneElement(this.props.children, {
      postalCode: this.state.postalCode,
    });
    return (
      <div className="app-container">
        {childrenWithProps}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
