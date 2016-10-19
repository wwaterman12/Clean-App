import React, { Component } from 'react';
import { Link } from 'react-router';
import Service from './Service.jsx';

const propTypes = {

};


class Services extends Component {
  constructor() {
    super();
    this.state = {
      airCondition1: 0,
      airCondition2: 0,
      rangeHood: 0,
      bathroom: 0,
      toilet: 0,
    };
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
          count={this.state.airCondition1}
          handleIncreaseCount={this.increaseCount}
          handleDecreaseCount={this.decreaseCount}
        />
        <Service
          serviceType="airCondition2"
          count={this.state.airCondition2}
          handleIncreaseCount={this.increaseCount}
          handleDecreaseCount={this.decreaseCount}
        />
        <Service
          serviceType="rangeHood"
          count={this.state.rangeHood}
          handleIncreaseCount={this.increaseCount}
          handleDecreaseCount={this.decreaseCount}
        />
        <Service
          serviceType="bathroom"
          count={this.state.bathroom}
          handleIncreaseCount={this.increaseCount}
          handleDecreaseCount={this.decreaseCount}
        />
        <Service
          serviceType="toilet"
          count={this.state.toilet}
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
