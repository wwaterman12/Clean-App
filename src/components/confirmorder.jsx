import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class ConfirmOrder extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      time: '',
      content: '',
      normalPrice: 0,
      finalPrice: 0,
    }
  }
  componentDidMount() {
    this.setState( {
      date: '2016/4/27',
      time: '10:00~12:00',
      content: 'Air Conditioning(1)',
      normalPrice: 13800,
      discount: 3000,
      finalPrice: 10800,
    })

  }

  render() {
    return (
      <div>
        <h3 className="confirm-heading">Please confirm your order</h3>
        <div className="confirm-content">
          <p>Service time<span className="confirm-value">{this.state.date}<br />{this.state.time}</span></p>
        </div>
        <div className="confirm-content">
          <p>Service contents<span className="confirm-value">{this.state.content}</span></p>
        </div>
        <div className="confirm-content">
          <p>normal price<span className="confirm-value">{this.state.normalPrice}</span></p>
          <p>Cleanapp discount<span className="confirm-value">{this.state.discount}</span></p>
        </div>
        <div className="confirm-content final">
          <p>Your final price<span className="confirm-value">{this.state.finalPrice}</span></p>
        </div>
        <Link className="confirm-bottom-button" to="/">Next</Link>
      </div>
    )
  }
}

export default ConfirmOrder
