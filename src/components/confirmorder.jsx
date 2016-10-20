import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class ConfirmOrder extends Component {
  render() {


    return (
      <div>
        <h3 className="confirm-heading">Please confirm your order</h3>
        <div className="confirm-content">
          <p>Service time<span></span></p>
        </div>
        <div className="confirm-content">
          <p>Service contents<span></span></p>
        </div>
        <div className="confirm-content">
          <p>normal price<span></span></p>
          <p>Cleanapp discount<span></span></p>
        </div>
        <div className="confirm-content">
          <p>Your final price<span></span></p>
        </div>
        <Link className="confirm-bottom-button" to="/">Next</Link>
      </div>
    )
  }
}

export default ConfirmOrder
