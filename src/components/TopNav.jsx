import React, { Component } from 'react';

class TopNav extends Component {

  toggleClass() {
    console.log('toggle is running');
    let nav = document.querySelectorAll('.nav-item');
    let hamburger = document.querySelector('.hamburger');
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
        <p className="nav-item nav-item--closed">What is cleanapp?</p>
        <p className="nav-item nav-item--closed">how we keep the prices low</p>
        <p className="nav-item nav-item--closed">log in</p>
      </div>
    );
  }
}

export default TopNav;
