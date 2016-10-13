import React, { Component } from 'react';

class Landing extends Component {
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="main-child landing-container">
        <div className="landing-content">
          <h1 className="landing_header">Open the door to a clean home</h1>
          <h3 className="landing_subhead">Book trusted professional cleaners at rock-bottom prices</h3>
        </div>
        <form className="postal-code-form" onSubmit={this.handleSubmit} >
          <p className="landing_postal-code-label">Insert your postal code below</p>
          <input type="text" name="postal-code" placeholder="郵便番号" onChange={this.handleChange} />
          <input type="submit" value="Next" />
        </form>
      </div>
    );
  }
}

export default Landing;
