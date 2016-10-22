import React, { Component } from 'react';
import { Link } from 'react-router';
import Service from './Service.jsx';

const propTypes = {
  selectedServices: React.PropTypes.object,
  handleIncreaseCount: React.PropTypes.func,
  handleDecreaseCount: React.PropTypes.func,
};


class Services extends Component {
  constructor () {
    super();
    this.state = {
      buttonClass: 'service-bottom-button--inactive',
    };
  }
  setSubmitButtonClass () {
    const { airCondition1, airCondition2, rangeHood, bathroom, toilet }
      = this.props.selectedServices;
    if ((airCondition1 || airCondition2 || rangeHood || bathroom || toilet) > 0) {
      return 'service-bottom-button--active';
    }
    else {
      return 'service-bottom-button--inactive';
    }
  }
  render() {
    return (
      <div className="service-list-container">
        <p className="heading">Select desired cleaning services</p>
        <Service
          serviceType="airCondition1"
          count={this.props.selectedServices.airCondition1}
          handleIncreaseCount={this.props.handleIncreaseCount}
          handleDecreaseCount={this.props.handleDecreaseCount}
        />
        <Service
          serviceType="airCondition2"
          count={this.props.selectedServices.airCondition2}
          handleIncreaseCount={this.props.handleIncreaseCount}
          handleDecreaseCount={this.props.handleDecreaseCount}
        />
        <Service
          serviceType="rangeHood"
          count={this.props.selectedServices.rangeHood}
          handleIncreaseCount={this.props.handleIncreaseCount}
          handleDecreaseCount={this.props.handleDecreaseCount}
        />
        <Service
          serviceType="bathroom"
          count={this.props.selectedServices.bathroom}
          handleIncreaseCount={this.props.handleIncreaseCount}
          handleDecreaseCount={this.props.handleDecreaseCount}
        />
        <Service
          serviceType="toilet"
          count={this.props.selectedServices.toilet}
          handleIncreaseCount={this.props.handleIncreaseCount}
          handleDecreaseCount={this.props.handleDecreaseCount}
        />
        <Link
          onClick={this.handleSelections}
          className={`service-bottom-button ${this.setSubmitButtonClass()}`}
          to="providers"
        >
        Next
        </Link>
      </div>
    );
  }
}

Services.propTypes = propTypes;

export default Services;
