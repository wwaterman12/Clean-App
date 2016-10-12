import React, { Component } from 'react';
import { hashHistory, withRouter } from 'react-router';

class Login extends Component {
  handleSubmit() {
    hashHistory.push('/');
  }
  render() {
    return (
      <button onClick={this.handleSubmit}>Login</button>
    );
  }
}

export default withRouter(Login);
