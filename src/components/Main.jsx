import React from 'react';
import TopNav from './TopNav.jsx';

const propTypes = {
  children: React.PropTypes.element,
};

const Main = () => (
  <div className="main-container">
    <TopNav />
    {this.props.children}
  </div>
);

Main.propTypes = propTypes;

export default Main;
