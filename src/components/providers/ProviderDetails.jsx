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
        <div className="provider-details_header">
          <Link to="/providers" className="back-button" >◀</Link>
          <h2 className="provider-details-title">Provider details:</h2>
          <h1 className="provider-name">{this.props.selectedProvider.name}</h1>
          <h3 className="provider-rating">(4.2/5) *****</h3>
        </div>
        <div className="provider-image"></div>
        <div className="provider-price">
          <span className="list-price">¥ 13,800</span> ¥ {this.props.totalPrice}
        </div>
        <div className="best-price-tag">Best price!</div>
        <Link className="detail-link">User comments <span>&gt;</span></Link>
        <Link className="detail-link">Company summary <span>&gt;</span></Link>
        <Link to="register" className="bottom-button">Proceed to Checkout</Link>
      </div>
    );
  }
}

ProviderDetails.propTypes = propTypes;

export default ProviderDetails;
