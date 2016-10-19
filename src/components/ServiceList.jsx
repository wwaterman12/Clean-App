import React, { Component } from 'react';
import { Link } from 'react-router';
import Service from './Service.jsx';

const propTypes = {
  servicesSelected: React.PropTypes.object,
  handleIncreaseCount: React.PropTypes.func,
  handleDecreaseCount: React.PropTypes.func,
};


class Services extends Component {
  render() {
    return (
      <div className="service-list-container">
        <p className="service-list-header">Select desired cleaning services</p>
        <Service
          serviceType="airCondition1"
          count={this.props.servicesSelected.airCondition1}
          handleIncreaseCount={this.props.handleIncreaseCount}
          handleDecreaseCount={this.props.handleDecreaseCount}
        />
        <Service
          serviceType="airCondition2"
          count={this.props.servicesSelected.airCondition2}
          handleIncreaseCount={this.props.handleIncreaseCount}
          handleDecreaseCount={this.props.handleDecreaseCount}
        />
        <Service
          serviceType="rangeHood"
          count={this.props.servicesSelected.rangeHood}
          handleIncreaseCount={this.props.handleIncreaseCount}
          handleDecreaseCount={this.props.handleDecreaseCount}
        />
        <Service
          serviceType="bathroom"
          count={this.props.servicesSelected.bathroom}
          handleIncreaseCount={this.props.handleIncreaseCount}
          handleDecreaseCount={this.props.handleDecreaseCount}
        />
        <Service
          serviceType="toilet"
          count={this.props.servicesSelected.toilet}
          handleIncreaseCount={this.props.handleIncreaseCount}
          handleDecreaseCount={this.props.handleDecreaseCount}
        />
        <Link className="service-bottom-button" to="/">Next</Link>
      </div>
    );
  }
}

Services.propTypes = propTypes;

export default Services;
