import React, { Component } from 'react';
import { Link } from 'react-router';
import ServiceIncrementor from './ServiceIncrementor.jsx';

const propTypes = {
  serviceType: React.PropTypes.string,
  count: React.PropTypes.number,
  handleIncreaseCount: React.PropTypes.func,
  handleDecreaseCount: React.PropTypes.func,
};

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.count > 0,
      showIncrementor: false,
    };
    this.toggleIncrementor = this.toggleIncrementor.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ selected: nextProps.count > 0 });
  }
  setCountButtonClass() {
    if (this.state.selected === true) {
      return 'service-count-button service-count-button--selected';
    }
    return 'service-count-button';
  }
  getServiceInfo() {
    let serviceInfo;
    switch (this.props.serviceType) {
      case 'airCondition1':
        serviceInfo = {
          serviceIconSrc: './images/services-icons/cleanapp_services_air-condition.png',
          serviceIconAlt: 'Air Condition',
          serviceName: 'Air Condition',
          serviceDescription: 'Reduce dust and allergies',
          learnmore: 'Learn more',
        };
        break;
      case 'airCondition2':
        serviceInfo = {
          serviceIconSrc: './images/services-icons/cleanapp_services_air-condition.png',
          serviceIconAlt: 'Air Condition (with robot)',
          serviceName: 'Air Condition (with robot)',
          serviceDescription: 'Reduce dust and allergies',
          learnmore: 'Learn more',
        };
        break;
      case 'rangeHood':
        serviceInfo = {
          serviceIconSrc: './images/services-icons/cleanapp_services_range-hood.png',
          serviceIconAlt: 'Range-hood',
          serviceName: 'Range-hood',
          serviceDescription: 'Remove old kitchen grease',
          learnmore: 'Learn more',
        };
        break;
      case 'bathroom':
        serviceInfo = {
          serviceIconSrc: './images/services-icons/cleanapp_services_bathroom.png',
          serviceIconAlt: 'Bathroom',
          serviceName: 'Bathroom',
          serviceDescription: 'Get a shining bathroom',
          learnmore: 'Learn more',
        };
        break;
      case 'toilet':
        serviceInfo = {
          serviceIconSrc: './images/services-icons/cleanapp_services_toilet.png',
          serviceIconAlt: 'Toilet',
          serviceName: 'Toilet',
          serviceDescription: 'Get a shining clean toilet',
          learnmore: 'Learn more',
        };
        break;
      default:
        serviceInfo = {};
    }
    return serviceInfo;
  }
  toggleIncrementor() {
    if (this.state.showIncrementor === true) {
      this.setState({ showIncrementor: false });
    } else {
      this.setState({ showIncrementor: true });
    }
  }
  render() {
    let count;
    if (this.props.count !== 0) {
      count = this.props.count;
    }
    const countButtonClass = this.setCountButtonClass();
    const serviceInfo = this.getServiceInfo();
    return (
      <div className="service-offering">
        <div className="service-image">
          <img
            src={serviceInfo.serviceIconSrc}
            alt={serviceInfo.serviceIconAlt}
          />
        </div>
        <div className="service-text">
          <p className="service-name">{serviceInfo.serviceName}</p>
          <p className="service-description">{serviceInfo.serviceDescription}</p>
          <p className="service-description"><Link href="#/services">{serviceInfo.learnmore}</Link></p>
        </div>
        <div className="service-count">
          <button className={countButtonClass} onClick={this.toggleIncrementor}>
            <div className="service-button-content">
              {count}
            </div>
          </button>
        </div>
        <ServiceIncrementor
          visible={this.state.showIncrementor}
          serviceType={this.props.serviceType}
          count={this.props.count}
          handleIncreaseCount={this.props.handleIncreaseCount}
          handleDecreaseCount={this.props.handleDecreaseCount}
        />
      </div>
    );
  }
}

Service.propTypes = propTypes;

export default Service;
