import React, { Component } from 'react';
import { Link } from 'react-router';

class TopNav extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
  }
  componentDidMount() {
    this.menuIcon();
    this.menuItemClass();
  }
  menuIcon() {
    return this.state.menuOpen === false ? '☰' : 'x';
  }
  menuItemClass() {
    return this.state.menuOpen === false ? 'nav-item nav-item--closed' : 'nav-item nav-item--open';
  }
  toggleClass(e) {
    this.state.menuOpen === false ? this.setState({ menuOpen: true }) : this.setState({ menuOpen: false });
  }
  render() {
    return (
      <div>
        <div className="top-nav">
          <img className="logo-icon" src="./images/cleanapp_logo_icon.png" alt="Cleanapp logo" />
          <img className="logotype" src="./images/cleanapp_logotype.png" alt="Cleanapp" />
          <button className="hamburger" onClick={this.toggleClass}>{this.menuIcon()}</button>
        </div>
        <Link to="/" className={this.menuItemClass()}>What is cleanapp?</Link>
        <Link to="/" className={this.menuItemClass()}>how we keep the prices low</Link>
        <Link to="/login" className={this.menuItemClass()}>log in</Link>
      </div>
    );
  }
}

export default TopNav;
