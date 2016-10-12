import React, { Component } from 'react';
import { Link } from 'react-router';

class TopNav extends Component {
  toggleClass() {
    const nav = document.querySelectorAll('.nav-item');
    const hamburger = document.querySelector('.hamburger');
    for (let navItem of nav) {
      if (navItem.className === 'nav-item nav-item--closed') {
        navItem.setAttribute('class', 'nav-item nav-item--open');
      } else if (navItem.className === 'nav-item nav-item--open') {
        navItem.setAttribute('class', 'nav-item nav-item--closed');
      }
    }
    hamburger.innerText == '☰' ? hamburger.innerText='x' : hamburger.innerText='☰';
  }
  render() {
    return (
      <div>
        <div className="top-nav">
          <img className="logo-icon" src="./images/cleanapp_logo_icon.png" alt="Cleanapp logo" />
          <img className="logotype" src="./images/cleanapp_logotype.png" alt="Cleanapp" />
          <p className="hamburger" onClick={this.toggleClass}>☰</p>
        </div>
        <Link to="/" className="nav-item nav-item--closed">What is cleanapp?</Link>
        <Link to="/" className="nav-item nav-item--closed">how we keep the prices low</Link>
        <Link to="/login" className="nav-item nav-item--closed">log in</Link>
      </div>
    );
  }
}

export default TopNav;
