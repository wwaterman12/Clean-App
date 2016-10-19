import React from 'react';
import TopNav from './TopNav.jsx';

const propTypes = {
  children: React.PropTypes.element,
  postalCode: React.PropTypes.string,
};

const Main = ({ children, postalCode }) => {
  const childrenWithProps = React.cloneElement(children, {
    postalCode,
  });
  return (
    <div className="main-container">
      <TopNav />
      {childrenWithProps}
    </div>
  );
};

Main.propTypes = propTypes;

export default Main;
