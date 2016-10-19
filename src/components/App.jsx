import React, { Component } from 'react';

const propTypes = {
  children: React.PropTypes.element,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedOfferings: {},
      postalCode: '',
    };
    this.setPostalCode = this.setPostalCode.bind(this);
  }
  setPostalCode(postalCode) {
    this.setState({ postalCode });
  }
  render() {
    const childrenWithProps = React.cloneElement(this.props.children, {
      postalCode: this.state.postalCode,
      setPostalCode: this.setPostalCode,
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
