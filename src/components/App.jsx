import React, { Component } from 'react';

const propTypes = {
  children: React.PropTypes.element,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      postalCode: '',
      selectedVendorAndTime: {},
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
  increaseCount(serviceToChange) {
    this.countServices(serviceToChange, '+');
  }
  decreaseCount(serviceToChange) {
    this.countServices(serviceToChange, '-');
  }
  countServices(serviceToChange, operand) {
    const { servicesSelected } = this.state;
    const newState = {};
    Object.keys(servicesSelected).forEach((service) => {
      if (service === serviceToChange) {
        const currentValue = servicesSelected[service];
        let nextValue;
        if (operand === '+') {
          nextValue = currentValue + 1;
        } else {
          currentValue > 0 ? nextValue = currentValue - 1 : nextValue = currentValue;
        }
        newState[service] = nextValue;
      } else {
        newState[service] = servicesSelected[service];
      }
      this.setState({ servicesSelected: newState });
    });
  }
  setVendorAndTime (provider) {
    this.setState({
      selectedVendorAndTime: provider,
    })
  }
  render() {
    const childrenWithProps = React.cloneElement(this.props.children, {
      postalCode: this.state.postalCode,
      servicesSelected: this.state.servicesSelected,
      setPostalCode: this.setPostalCode,
      selectedOfferings: this.state.selectedOfferings,
      setSelectedOfferings: this.setSelectedOfferings,
      setVendorAndTime: this.setVendorAndTime,
      handleIncreaseCount: this.increaseCount,
      handleDecreaseCount: this.decreaseCount,
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
