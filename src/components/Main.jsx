import React from 'react';
import TopNav from './TopNav.jsx';

const propTypes = {
  children: React.PropTypes.element,
  postalCode: React.PropTypes.string,
  setPostalCode: React.PropTypes.func,
};

const Main = ({ children, postalCode, setPostalCode }) => {
  const childrenWithProps = React.cloneElement(children, {
    postalCode,
    setPostalCode,
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
