import React from 'react';

const propTypes = {
  prices: React.PropTypes.object,
  selectedServices: React.PropTypes.object,
  availability: React.PropTypes.object,
  selectBlock: React.PropTypes.func,
};

export default class ProviderOption extends React.Component {
  setVendor () {
    this.props.selectBlock(this.props.availability);
  }
  render () {
    return (
      <div onClick={this.setVendor}>
      i r divcat
      </div>
    );
  }
}
