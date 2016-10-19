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
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }
  setPostalCode(postalCode) {
    this.setState({ postalCode });
  }
  increaseCount(serviceToIncrease) {
    const { servicesSelected } = this.state;
    Object.keys(servicesSelected).forEach((service) => {
      const newState = {};
      if (service === serviceToIncrease) {
        const currentValue = servicesSelected[service];
        const nextValue = currentValue + 1;
        newState[service] = nextValue;
      } else {
        newState[service] = servicesSelected[service];
      }
      this.setState({ servicesSelected: newState });
    });
  }
  decreaseCount(serviceName) {
    Object.keys(this.state).forEach((stateKey) => {
      if (stateKey === serviceName) {
        const currentValue = this.state[stateKey];
        if (currentValue > 0) {
          const nextValue = currentValue - 1;
          const newState = {};
          newState[stateKey] = nextValue;
          this.setState(newState);
        }
      }
    });
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
