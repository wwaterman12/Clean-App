import React from 'react';
import { Link } from 'react-router';

const Finish = () => (
  <div className="main-child finish-container">
    <div className="finish-content">
      <h3 className="finish_thank-you">Thank you for your order!</h3>
      <img className="finish_checkmark" src="./images/cleanapp_checkmark.png" alt="checkmark" />
      <p className="finish_order-number">order no: <span>15687923</span></p>
      <p className="finish_confirm-email">We&#39;ve sent you a confirmation to your e-mail.</p>
    </div>
    <Link className="bottom-button" to="/">Return to home</Link>
  </div>
);

export default Finish;
