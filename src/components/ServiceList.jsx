import React, { Component } from 'react';
import { Link } from 'react-router';
import Service from './Service.jsx';

const propTypes = {

};


class Services extends Component {
  constructor() {
    super();
    this.state = {
      AC1: { open: false, count: 0 },
      AC2: { open: false, count: 0 },
      range: { open: false, count: 0 },
      bathroom: { open: false, count: 0 },
      toilet: { open: false, count: 0 },
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu(e) {
    const offering = e.target.getAttribute('name');
    const updated = {};
    updated[offering] = this.state[offering];
    let menuOpen;
    updated[offering].open ? menuOpen = false : menuOpen = true;
    updated[offering].open = menuOpen;
    this.setState(updated);
  }
  handleCount(name) {
  }
  render() {
    return (
      // TODO There's a lot of repetition here...maybe services list and service should be separate
      // components?
      <div className="service-container">
        <p className="service-header">Select desired cleaning services</p>
        <Service serviceType="airCondition1" />
        <Service serviceType="airCondition2" />
        <Service serviceType="rangeHood" />
        <Service serviceType="bathroom" />
        <Service serviceType="toilet" />
        {/* <div className="service-offering" name="AC1" onClick={this.toggleMenu}>
        <div className="service-offering" name="toilet" onClick={this.toggleMenu}>
          <img
            className="service-image"
            src="./images/services-icons/cleanapp_services_toilet.png"
            alt="toilet"
          />
          <div className="service-text">
            <p className="service-title">Toilet</p>
            <p className="service-content">Reduce dust and allergies</p>
          </div>
          <span className="service-count">5</span>
        </div> */}
        <Link className="service-bottom-button" to="/">Next</Link>
        {/* <MenuModal name="toilet" /> */}
      </div>
    );
  }
}

Services.propTypes = propTypes;

export default Services;
