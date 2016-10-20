import React, { Component } from 'react';
import { Link } from 'react-router';

class TopNav extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
      navHeight: '0px',
    };
    this.toggleClass = this.toggleClass.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleNavResize();
    this.menuIcon();
    this.menuItemClass();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleNavResize);
  }
  handleNavResize() {
    const bodyHeight = document.body.offsetHeight;
    const navHeight = `${bodyHeight * 0.1}px`;
    this.setState({ navHeight });
  }
  menuIcon() {
    return this.state.menuOpen === false ? '☰' : 'x';
  }
  menuItemClass() {
    if (this.state.menuOpen === false) {
      return 'nav-item nav-item--closed';
    }
    return 'nav-item nav-item--open';
  }
  toggleClass() {
    if (this.state.menuOpen === false) {
      return this.setState({ menuOpen: true });
    }
    return this.setState({ menuOpen: false });
  }
  render() {
    return (
      <div className="menu clearfix">
        <div className="top-nav clearfix" style={{ height: this.state.navHeight }} >
          <Link to="/" className="logo-icon">
            <img src="./images/cleanapp_logo_icon.png" alt="Cleanapp logo" />
          </Link>
          <Link to="/" className="logotype">
            <img src="./images/cleanapp_logotype.png" alt="Cleanapp" />
          </Link>
          <button className="hamburger" onClick={this.toggleClass}>
            {this.menuIcon()}
          </button>
        </div>
        <Link to="/" className={this.menuItemClass()} onClick={this.toggleClass} >
          What is Cleanapp?
        </Link>
        <Link
          to="/login"
          className={`${this.menuItemClass()} nav-item--bottom`}
          onClick={this.toggleClass}
        >
          Log In
        </Link>
      </div>
    );
  }
}

export default TopNav;
