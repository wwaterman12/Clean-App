import React, { Component } from 'react';
import { hashHistory, withRouter, Link } from 'react-router';

class Login extends Component {
  constructor () {
    super();
    this.state = {
      email: false,
      password: false,
    }
  }
  static handleSubmit(e) {
    e.preventDefault();
    hashHistory.push('/services');
  }
  isEmailInput (e) {
    if (e.target.value) {
      this.setState({
        email: true,
      });
    }
    else {
      this.setState({
        email: false,
      })
    }
  }
  isPasswordInput (e) {
    if (e.target.value) {
      this.setState({
        password: true,
      });
    }
    else {
      this.setState({
        password: false,
      })
    }
  }
  setSubmitButtonClass () {
    if (this.state.email && this.state.password) {
      return 'login-submit-button--active';
    }
    else {
      return 'login-submit-button--inactive';
    }
  }
  render() {
    return (
      <div className="main-child login-container">
        <form className="login-form">
          <div className="login-form_content">
            <h2 className="login-header">Please Log In</h2>
            <div className="login-form_inputs">
              <input type="email" name="email" placeholder="Email" onChange={this.isEmailInput}/>
              <input type="password" name="password" placeholder="Password" onChange={this.isPasswordInput}/>
            </div>
            <Link className="login-form_password-link" to="/login">Forgot your password?</Link>
          </div>
          <input type="submit" value="Log In" onClick={Login.handleSubmit} className={this.setSubmitButtonClass()}/>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
