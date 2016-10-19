import React, { Component } from 'react';

const propTypes = {
  children: React.PropTypes.element,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      postalCode: '',
      servicesSelected: {
        airCondition1: 0,
        airCondition2: 0,
        rangeHood: 0,
        bathroom: 0,
        toilet: 0,
      },
    };
    this.setPostalCode = this.setPostalCode.bind(this);
  }
  setPostalCode(postalCode) {
    this.setState({ postalCode });
  }
  render() {
    const childrenWithProps = React.cloneElement(this.props.children, {
      postalCode: this.state.postalCode,
      servicesSelected: this.state.servicesSelected,
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
