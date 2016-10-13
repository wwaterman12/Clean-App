import React from 'react';
import TopNav from './TopNav.jsx';

const propTypes = {
  children: React.PropTypes.element,
};

const Main = ({ children }) => (
  <div className="main-container">
    <TopNav />
    {children}
  </div>
);

Main.propTypes = propTypes;

export default Main;
