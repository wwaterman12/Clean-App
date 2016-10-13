import React, { Component } from 'react';
import { hashHistory, withRouter } from 'react-router';

class Login extends Component {
  handleSubmit() {
    hashHistory.push('/');
  }
  render() {
    return (
      <div className="main-child login-container">
        <button onClick={this.handleSubmit}>Login</button>
      </div>
    );
  }
}

export default withRouter(Login);
