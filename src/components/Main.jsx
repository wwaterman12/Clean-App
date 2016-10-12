import React, { Component } from 'react';
import TopNav from './TopNav.jsx';

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

export default Main;
