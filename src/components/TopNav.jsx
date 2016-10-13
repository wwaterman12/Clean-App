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
  toggleClass() {
    this.state.menuOpen === false
      ? this.setState({ menuOpen: true })
      : this.setState({ menuOpen: false });
  }
  render() {
    return (
      <div>
        <div className="top-nav clearfix">
          <Link to="/">
            <img className="logo-icon" src="./images/cleanapp_logo_icon.png" alt="Cleanapp logo" />
          </Link>
          <Link to="/">
            <img className="logotype" src="./images/cleanapp_logotype.png" alt="Cleanapp" />
          </Link>
          <button className="hamburger" onClick={this.toggleClass}>{this.menuIcon()}</button>
        </div>
        <Link to="/" className={this.menuItemClass()} onClick={this.toggleClass} >
          What is Cleanapp?
        </Link>
        <Link to="/" className={this.menuItemClass()} onClick={this.toggleClass} >
          How We Keep the Prices Low
        </Link>
        <Link to="/login" className={this.menuItemClass()} onClick={this.toggleClass} >
          Log In
        </Link>
      </div>
    );
  }
}

export default TopNav;
