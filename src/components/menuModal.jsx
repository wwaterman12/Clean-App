import React, { Component } from 'react';

const propTypes = {
  updateCount: React.PropTypes.func,
  serviceType: React.PropTypes.string,
};

class MenuModal extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleCount = this.handleCount.bind(this);
  }
  handleCount(e) {
    let newCount = this.state.count;
    if (e.target.getAttribute('name') === 'up') {
      newCount ++;
      this.setState({
        count: newCount
      })
    }
    else if (this.state.count > 0) {
      newCount --;
      this.setState({
        count: newCount
      })
    }
  }
  render() {
    return (
      <div>
        <div name='down' onClick={this.handleCount}>-</div>
        <div>{this.state.count}</div>
        <div name='up' onClick={this.handleCount}>+</div>
      </div>
    );
  }
}

MenuModal.propTypes = propTypes;

export default MenuModal;
