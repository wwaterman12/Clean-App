import React, { Component } from 'react';
import { hashHistory } from 'react-router';

const propTypes = {
  postalCode: React.PropTypes.string,
  setPostalCode: React.PropTypes.func,
};

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localPostalCode: this.props.postalCode,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setSubmitButtonClass();
  }
  setSubmitButtonClass() {

  }
  handleInput(e) {
    const localPostalCode = e.target.value;
    if (e.target.value.length <= 7) {
      this.setState({ localPostalCode });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.setPostalCode(this.state.localPostalCode);
    hashHistory.push('/services');
  }
  render() {
    return (
      <div className="main-child landing-container">
        <div className="landing-content">
          <h1 className="landing_header">Open the door to a clean home</h1>
          <h3 className="landing_subhead">
            Book trusted professional cleaners at rock-bottom prices
          </h3>
        </div>
        <form className="postal-code-form" onSubmit={this.handleSubmit} >
          <p className="landing_postal-code-label">Insert your postal code below</p>
          <input
            type="number"
            pattern="[0-9]*"
            maxLength={7}
            min={0}
            name="postal-code"
            placeholder="郵便番号"
            onChange={this.handleInput}
            value={this.state.localPostalCode}
          />
          <input className="submit-button" type="submit" value="Next" />
        </form>
      </div>
    );
  }
}

Landing.propTypes = propTypes;

export default Landing;
