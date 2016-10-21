import React from 'react';
import { Link } from 'react-router';

class Payment extends React.Component {
  constructor() {
    super();
    this.state = {
      ccNumber: '',
      expiration: '',
      CVC: '',
    }
   this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const input = e.target;
    const inputName = input.getAttribute('name');
    const updated = {};
    updated[inputName] = input.value;
    this.setState(updated);
  }


  render() {
    return (
      <div>
        <div className="heading">Fill in your payment information</div>
        <div className="cc-icons">
        </div>
        <div className="cc-form">
           <input type="text" className="block-input" onChange={this.handleChange} name="ccNumber" placeholder="Credit Card Number" />
           <input type="text" className="in-line-input" onChange={this.handleChange} name="expiration" placeholder="Expiration date MM/YY" />
           <input type="text" className="in-line-input" onChange={this.handleChange} name="CVC" placeholder="CVC" />
        </div>
        <p></p>
        <p></p>
        <Link className="bottom-button" to="finish">Make Payment</Link>
      </div>

      )
  }
}


export default Payment;
