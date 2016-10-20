import React, { Component } from 'react';

const propTypes = {
  children: React.PropTypes.element,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      postalCode: 0,
      selectedProvider: {
        id: 0,
        name: '',
      },
      selectedTime: {},
      totalPrice: 0,
      selectedServices: {
        airCondition1: 0,
        airCondition2: 0,
        rangeHood: 0,
        bathroom: 0,
        toilet: 0,
      },
    };
    this.setPostalCode = this.setPostalCode.bind(this);
    this.setProviderTimeAndPrice = this.setProviderTimeAndPrice.bind(this);
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }
  setPostalCode(postalCodeInput) {
    const postalCode = parseInt(postalCodeInput, 10);
    this.setState({ postalCode });
  }
  setProviderTimeAndPrice({ selectedProvider, selectedTime, totalPrice }) {
    this.setState({ selectedProvider, selectedTime, totalPrice });
  }
  increaseCount(serviceToChange) {
    this.countServices(serviceToChange, '+');
  }
  decreaseCount(serviceToChange) {
    this.countServices(serviceToChange, '-');
  }
  countServices(serviceToChange, operand) {
    const { selectedServices } = this.state;
    const newState = {};
    Object.keys(selectedServices).forEach((service) => {
      if (service === serviceToChange) {
        const currentValue = selectedServices[service];
        let nextValue;
        if (operand === '+') {
          nextValue = currentValue + 1;
        } else {
          currentValue > 0 ? nextValue = currentValue - 1 : nextValue = currentValue;
        }
        newState[service] = nextValue;
      } else {
        newState[service] = selectedServices[service];
      }
      this.setState({ selectedServices: newState });
    });
  }
  render() {
    const childrenWithProps = React.cloneElement(this.props.children, {
      postalCode: this.state.postalCode,
      selectedProvider: this.state.selectedProvider,
      selectedTime: this.state.selectedTime,
      selectedServices: this.state.selectedServices,
      totalPrice: this.state.totalPrice,
      setPostalCode: this.setPostalCode,
      setProviderTimeAndPrice: this.setProviderTimeAndPrice,
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
