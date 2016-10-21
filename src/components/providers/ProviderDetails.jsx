import React, { Component } from 'react';
import { Link } from 'react-router';

const propTypes = {
  params: React.PropTypes.object,
  selectedProvider: React.PropTypes.object,
  totalPrice: React.PropTypes.number,
};


class ProviderDetails extends Component {
  render() {
    return (
      <div className="provider-details-container">
        <h2 className="provider-details_header">Provider details:</h2>
        <h1 className="provider-name">{this.props.selectedProvider.name}</h1>
        <h3 className="provider-rating">(4.2/5) *****</h3>
        <div className="provider-image"></div>
        <div className="provider-price">{this.props.totalPrice}</div>
        <Link to={`#/providers/${this.props.selectedProvider.id}`}>User comments &gt;</Link>
        <Link>Company summary &lt;</Link>
      </div>
    );
  }
}

ProviderDetails.propTypes = propTypes;

export default ProviderDetails;
