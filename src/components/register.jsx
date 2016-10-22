import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      lastKanji: '',
      firstKanji: '',
      lastKana: '',
      firstKana: '',
      email: '',
      streetAddress: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.setSubmitButtonClass = this.setSubmitButtonClass.bind(this);
  }

  setSubmitButtonClass () {
    if ((((this.state.lastKanji.length > 0) && (this.state.firstKanji.length > 0)) || ((this.state.lastKana.length > 0) && (this.state.firstKana.length > 0)))
      && (this.state.email.length > 0) && (this.state.streetAddress.length > 0) && (this.state.password.length > 0)) {
        return 'register-bottom-button--active';
      }
    else {
      return 'register-bottom-button--inactive';
    }
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
        <h3 className="heading">Fill in your information</h3>
          <div className="register-form">
            <input type="text" className="in-line-input" onChange={this.handleChange} name="lastKanji" placeholder="Last name (Kanji)" />
            <input type="text" className="in-line-input" onChange={this.handleChange} name="firstKanji" placeholder="First name (Kanji)" />
            <input type="text" className="in-line-input" onChange={this.handleChange} name="lastKana" placeholder="Last name (Kana)" />
            <input type="text" className="in-line-input" onChange={this.handleChange} name="firstKana" placeholder="First name (Kana)" />
            <input type="email" className="block-input" onChange={this.handleChange} name="email" placeholder="email" />
            <input type="text" className="block-input city" value="川崎市中原区" />
            <input type="text" className="block-input" onChange={this.handleChange} name="streetAddress" placeholder="Street address" />
            <input type="password" className="block-input" onChange={this.handleChange} name="password" placeholder="Create password" />
            <input type="password" className="block-input" name="password-confirm" placeholder="Confirm password" />
          </div>
          <Link className={`register-bottom-button ${this.setSubmitButtonClass()}`} to="confirm-order">Next</Link>
      </div>

    )
  }

}

export default Register;
