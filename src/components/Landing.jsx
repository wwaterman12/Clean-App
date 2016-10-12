import React, { Component } from 'react';

class Landing extends Component {
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="landing-container">
        <h1>Open the door to a clean home</h1>
        <p>Book trusted professional cleaners at rock-bottom prices</p>
        <p>Insert your postal code below</p>
        <form className="zip-form" onSubmit={this.handleSubmit} >
          <input type="text" name="zip" placeholder="郵便番号" onChange={this.handleChange} />
          <input type="submit" value="Next" />
        </form>
      </div>
    );
  }
}

export default Landing;
