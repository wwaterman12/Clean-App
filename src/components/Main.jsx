import React, { Component } from 'react';
import TopNav from './TopNav.jsx';

const propTypes = {
  children: React.PropTypes.element,
};

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <TopNav />
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
