import React, { Component } from 'react';
import MenuModal from './MenuModal.jsx';

const propTypes = {
  serviceType: React.PropTypes.string,
};

class Service extends Component {
  render() {
    let serviceIconSrc;
    let serviceIconAlt;
    let serviceName;
    let serviceDescription;
    switch (this.props.serviceType) {
      case 'airCondition1':
        serviceIconSrc = './images/services-icons/cleanapp_services_air-condition.png';
        serviceIconAlt = 'Air Condition';
        serviceName = 'Air Condition';
        serviceDescription = 'Reduce dust and allergies';
        break;
      case 'airCondition2':
        serviceIconSrc = './images/services-icons/cleanapp_services_air-condition.png';
        serviceIconAlt = 'Air Condition (with robot)';
        serviceName = 'Air Condition (with robot)';
        serviceDescription = 'Reduce dust and allergies';
        break;
      case 'rangeHood':
        serviceIconSrc = './images/services-icons/cleanapp_services_range-hood.png';
        serviceIconAlt = 'Range-hood';
        serviceName = 'Range-hood';
        serviceDescription = 'Remove old kitchen grease';
        break;
      case 'bathroom':
        serviceIconSrc = './images/services-icons/cleanapp_services_bathroom.png';
        serviceIconAlt = 'Bathroom';
        serviceName = 'Bathroom';
        serviceDescription = 'Get a shining bathroom';
        break;
      case 'toilet':
        serviceIconSrc = './images/services-icons/cleanapp_services_toilet.png';
        serviceIconAlt = 'Toilet';
        serviceName = 'Toilet';
        serviceDescription = 'Get a shining clean toilet';
        break;
      default:
        serviceIconSrc = '';
        serviceIconAlt = '';
    }
    return (
      <div className="service-offering">
        <img
          className="service-image"
          src={serviceIconSrc}
          alt={serviceIconAlt}
        />
        <div className="service-text">
          <p className="service-title">{serviceName}</p>
          <p className="service-content">{serviceDescription}</p>
        </div>
        <span className="service-count">1</span>
        {/* <MenuModal name={this.props.serviceType} /> */}
      </div>
    );
  }
}

Service.propTypes = propTypes;

export default Service;
