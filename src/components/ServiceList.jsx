import React, { Component } from 'react';
import { Link } from 'react-router';
import Service from './Service.jsx';

const propTypes = {
  servicesSelected: React.PropTypes.object,
};


class Services extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   airCondition1: this.props.servicesSelected.airCondition1,
    //   airCondition2: this.props.servicesSelected.airCondition2,
    //   rangeHood: this.props.servicesSelected.rangeHood,
    //   bathroom: this.props.servicesSelected.bathroom,
    //   toilet: this.props.servicesSelected.toilet,
    // };
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }
  increaseCount(serviceName) {
    Object.keys(this.state).forEach((stateKey) => {
      if (stateKey === serviceName) {
        const currentValue = this.state[stateKey];
        const nextValue = currentValue + 1;
        const newState = {};
        newState[stateKey] = nextValue;
        this.setState(newState);
      }
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
    return (
      <div className="service-list-container">
        <p className="service-list-header">Select desired cleaning services</p>
        <Service
          serviceType="airCondition1"
          count={this.props.servicesSelected.airCondition1}
          handleIncreaseCount={this.increaseCount}
          handleDecreaseCount={this.decreaseCount}
        />
        <Service
          serviceType="airCondition2"
          count={this.props.servicesSelected.airCondition2}
          handleIncreaseCount={this.increaseCount}
          handleDecreaseCount={this.decreaseCount}
        />
        <Service
          serviceType="rangeHood"
          count={this.props.servicesSelected.rangeHood}
          handleIncreaseCount={this.increaseCount}
          handleDecreaseCount={this.decreaseCount}
        />
        <Service
          serviceType="bathroom"
          count={this.props.servicesSelected.bathroom}
          handleIncreaseCount={this.increaseCount}
          handleDecreaseCount={this.decreaseCount}
        />
        <Service
          serviceType="toilet"
          count={this.props.servicesSelected.toilet}
          handleIncreaseCount={this.increaseCount}
          handleDecreaseCount={this.decreaseCount}
        />
        <Link className="service-bottom-button" to="/">Next</Link>
      </div>
    );
  }
}

Services.propTypes = propTypes;

export default Services;
