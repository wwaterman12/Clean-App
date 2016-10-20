import React, { Component } from 'react';

const propTypes = {
  params: React.PropTypes.object,
};


class ProviderDetails extends Component {
  render() {
    return (
      <h1>Provider {this.props.params.id}</h1>
    );
  }
}

ProviderDetails.propTypes = propTypes;

export default ProviderDetails;
