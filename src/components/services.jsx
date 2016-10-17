import React, { Component } from 'react';
import { Link } from 'react-router';
import MenuModal from './menuModal.jsx';

class Services extends Component {
  constructor() {
    super();
    this.state = {
      AC1: {open: false, count: 0,},
      AC2: {open: false, count: 0,},
      range: {open: false, count: 0,},
      bathroom: {open: false, count: 0,},
      toilet: {open: false, count: 0,},
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu (e) {
    const offering = e.target.getAttribute('name');
    const updated = {};
    updated[offering] = this.state[offering];
    let menuOpen;
    updated[offering].open ? menuOpen = false : menuOpen = true;
    updated[offering].open = menuOpen;
    this.setState(updated);
  }

  handleCount (name) {}

  render() {
    return (
    <div className="service-container">

      <p className="service-header">Select desired cleaning services</p>

      <div className="service-offering" name="AC1" onClick={this.toggleMenu}>
        <img className="service-image" src="./images/services-icons/cleanapp_services_air-condition.png" alt="aircon" />
        <div className="service-text">
          <p className="service-title">Air Condition</p>
          <p className="service-content">Reduce dust and allergies</p>
        </div>
        <span className="service-count">1</span>
        <MenuModal name="AC1"/>
      </div>

       <div className="service-offering" name="AC2" onClick={this.toggleMenu}>
        <img className="service-image" src="./images/services-icons/cleanapp_services_air-condition.png" alt="aircon" />
        <div className="service-text">
          <p className="service-title">Air Condition (with robot)</p>
          <p className="service-content">Reduce dust and allergies</p>
        </div>
        <span className="service-count">2</span>
        <MenuModal name="AC2"/>
      </div>

       <div className="service-offering" name="range" onClick={this.toggleMenu}>
        <img className="service-image" src="./images/services-icons/cleanapp_services_range-hood.png" alt="range-hood" />
        <div className="service-text">
          <p className="service-title">Range-hood</p>
          <p className="service-content">Reduce dust and allergies</p>
        </div>
        <span className="service-count">3</span>
        <MenuModal name="range" />
      </div>

       <div className="service-offering" name="bathroom" onClick={this.toggleMenu}>
        <img className="service-image" src="./images/services-icons/cleanapp_services_bathroom.png" alt="bathroom" />
        <div className="service-text">
          <p className="service-title">Bathroom</p>
          <p className="service-content">Reduce dust and allergies</p>
        </div>
        <span className="service-count">4</span>
        <MenuModal name="bathroom" />
      </div>

      <div className="service-offering" name="toilet" onClick={this.toggleMenu}>
        <img className="service-image" src="./images/services-icons/cleanapp_services_toilet.png" alt="toilet" />
        <div className="service-text">
          <p className="service-title">Toilet</p>
          <p className="service-content">Reduce dust and allergies</p>
        </div>
        <span className="service-count">5</span>
      </div>
      <Link className="service-bottom-button" to="/">Next</Link>
      <MenuModal name="toilet" />
    </div>
    )
  }
}

export default Services
