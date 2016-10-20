import React, { Component } from 'react';
import { Link } from 'react-router';

const propTypes = {
  providerID: React.PropTypes.number,
  providerName: React.PropTypes.string,
  totalPrice: React.PropTypes.number,
  availability: React.PropTypes.object,
  selectedServices: React.PropTypes.object,
  setProviderTimeAndPrice: React.PropTypes.func,
};

class ProviderListItem extends Component {
  constructor() {
    super();
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect() {
    const provider = {
      id: this.props.providerID,
      name: this.props.providerName,
    };
    const selection = {
      selectedProvider: provider,
      selectedTime: this.props.availability,
      totalPrice: this.props.totalPrice,
    };
    this.props.setProviderTimeAndPrice(selection);
  }
  render() {
    return (
      <Link to={`/providers/${this.props.providerID}`} onClick={this.handleSelect}>
        <h3>{this.props.providerName}</h3>
        <p>{`${this.props.availability.start}—${this.props.availability.start}`}</p>
        <p>Price: ${this.props.totalPrice}</p>
      </Link>
    );
  }
}

ProviderListItem.propTypes = propTypes;

export default ProviderListItem;
