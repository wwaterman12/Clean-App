import React, { Component } from 'react';
import { hashHistory, withRouter, Link } from 'react-router';

class Login extends Component {
  static handleSubmit(e) {
    e.preventDefault();
    hashHistory.push('/');
  }
  render() {
    return (
      <div className="main-child login-container">
        <form className="login-form">
          <div className="login-form_content">
            <h2 className="login-header">Please Log In</h2>
            <div className="login-form_inputs">
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
            </div>
            <Link className="login-form_password-link" to="/login">Forgot your password?</Link>
          </div>
          <input type="submit" value="Log In" onClick={Login.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
