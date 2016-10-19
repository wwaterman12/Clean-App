import React, { Component } from 'react';

const propTypes = {
  children: React.PropTypes.element,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedOfferings: {},
      postalCode: '',
      selectedVendorAndTime: {},
    };
    this.setPostalCode = this.setPostalCode.bind(this);
  }
  setPostalCode(postalCode) {
    this.setState({ postalCode });
  }
  setSelectedOfferings (selections) {
    this.setState({
      selectedOfferings: selection,
    });
  }
  setVendorAndTime (provider) {
    this.setState({
      selectedVendorAndTime: provider,
    })
  }
  render() {
    const childrenWithProps = React.cloneElement(this.props.children, {
      postalCode: this.state.postalCode,
      setPostalCode: this.setPostalCode,
      selectedOfferings: this.state.selectedOfferings,
      setSelectedOfferings: this.setSelectedOfferings,
      setVendorAndTime: this.setVendorAndTime,
    });
    return (
      <div className="app-container">
        {childrenWithProps}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
