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
          <img className="cc-image" src="./images/1477108764_Visa-Curved.png" alt="visa" height="30" width="50" />
          <img className="cc-image" src="./images/1477108800_American-Express-Curved.png" alt="visa" height="30" width="50" />
          <img className="cc-image" src="./images/1477108823_Mastercard-Curved.png" alt="visa" height="30" width="50" />
          <img className="cc-image" src="./images/1477108833_Discover-Curved.png" alt="visa" height="30" width="50" />
        </div>
        <div className="cc-form">
           <input type="text" className="cc-input" onChange={this.handleChange} name="ccNumber" placeholder="Credit Card Number" />
           <input type="text" className="expiration-input" onChange={this.handleChange} name="expiration" placeholder="Expiration date MM/YY" />
           <input type="text" className="cvc-input" onChange={this.handleChange} name="CVC" placeholder="CVC" />
        </div>
        <p className="terms">
          By clicking the button below I accept Cleanapp&#39;s
          <br /><Link className="terms-link" to="/">Terms of Use</Link>
        </p>
        <Link className="bottom-button" to="finish">Make Payment</Link>
      </div>

      )
  }
}


export default Payment;
