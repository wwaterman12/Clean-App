import React, { Component } from 'react';

const propTypes = {
  children: React.PropTypes.element,
};

const App = ({ children }) => (
  <div className="app-container">
    {children}
  </div>
);

App.propTypes = propTypes;

export default App;
