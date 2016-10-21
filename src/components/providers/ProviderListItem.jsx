import React, { Component } from 'react';
import { Link } from 'react-router';

const propTypes = {
  providerID: React.PropTypes.number,
  providerName: React.PropTypes.string,
  prices: React.PropTypes.object,
  availability: React.PropTypes.object,
  selectedServices: React.PropTypes.object,
  setProviderTimeAndPrice: React.PropTypes.func,
  date: React.PropTypes.object,
};

class ProviderListItem extends Component {
  constructor() {
    super();
    this.handleSelect = this.handleSelect.bind(this);
  }
  sumPrices() {
    return 10800;
    // TODO actually sum the price
  }
  handleSelect() {
    const provider = {
      id: this.props.providerID,
      name: this.props.providerName,
    };
    const selection = {
      selectedProvider: provider,
      selectedTime: this.props.availability,
      totalPrice: 10800,
    };
    this.props.setProviderTimeAndPrice(selection);
  }
  render() {
    const totalPrice = this.sumPrices();
    const { day, month } = this.props.date;
    return (
      <Link className="provider-list-link" to={`/providers/${this.props.providerID}`} onClick={this.handleSelect}>
        <div className="provider-list_image-container">
          <div className="provider-list_image" />
          <div className="provider-list_best-price-tag">Best Price</div>
        </div>
        <div className="provider-list_details-container">
          <div className="provider-list_details">
            <p><strong>
            {month}月{day}日 {`${this.props.availability.start}~${this.props.availability.end}`}
            </strong></p>
            <p>{this.props.providerName}</p>
            <p>Price: ${totalPrice.toLocaleString()}</p>
          </div>
        </div>
      </Link>
    );
  }
}

ProviderListItem.propTypes = propTypes;

export default ProviderListItem;
