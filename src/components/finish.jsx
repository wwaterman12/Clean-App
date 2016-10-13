import React, { Component } from 'react';
import { Link } from 'react-router';

class Finish extends Component {
  constructor() {
    super();
  }

  render() {
    //<Link to="/" classname="back-to-home">Return to Home</Link>
    return (
      <div className="finish-container">
          <p className="thank-you">Thank You for your order!</p>
          <img className="checkmark" src="./images/cleanapp_checkmark.png" alt="checkmark" />
          <p className="order-number">order no:15687923</p>
          <p className="confirm-email">We've sent you a confirmation<br />to your e-mail.</p>
          <Link className="home-return" to="/">Return to home</Link>
        </div>
    )
  }
}

export default Finish;
