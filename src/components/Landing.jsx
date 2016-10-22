import React, { Component } from 'react';
import { hashHistory } from 'react-router';

const propTypes = {
  postalCode: React.PropTypes.number,
  setPostalCode: React.PropTypes.func,
};

class Landing extends Component {
  static setValidationMessage(valid) {
    if (valid === true) {
      const validationMessageNode = document.querySelector('.landing_postal-code-validation-message');
      validationMessageNode.textContent = '';
      return;
    }
    const validationMessageNode = document.querySelector('.landing_postal-code-validation-message');
    validationMessageNode.textContent = 'Please enter a valid postal code.';
    return;
  }
  constructor(props) {
    super(props);
    this.state = {
      localPostalCode: this.props.postalCode,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  setSubmitButtonClass() {
    if (this.state.localPostalCode.length === 7) {
      return 'submit-button--active';
    }
    return 'submit-button--inactive';
  }
  handleInput(e) {
    console.log(e.target.value);
    const localPostalCode = e.target.value;
    if (e.target.value.length <= 7) {
      this.setState({ localPostalCode });
    }
    if (e.target.value.length >= 7) {
      Landing.setValidationMessage(true);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.localPostalCode.length === 7) {
      this.props.setPostalCode(this.state.localPostalCode);
      hashHistory.push('/services');
    }
    Landing.setValidationMessage(false);
  }
  render() {
    const postalCode = this.state.localPostalCode === 0 ? '' : this.state.localPostalCode;
    console.log(postalCode);
    return (
      <div className="main-child landing-container">
        <div className="landing-content">
          <h1 className="landing_header">Open the door to a clean home</h1>
          <h3 className="landing_subhead">
            Book trusted professional cleaners at rock-bottom prices
          </h3>
        </div>
        <form className="postal-code-form" onSubmit={this.handleSubmit} >
          <p className="landing_postal-code-validation-message" />
          <p className="landing_postal-code-label">Insert your postal code below</p>
          <input
            type="number"
            pattern="[0-9]*"
            maxLength={7}
            min={0}
            name="postal-code"
            placeholder="郵便番号"
            onChange={this.handleInput}
            value={postalCode}
          />
          <input
            className={`submit-button ${this.setSubmitButtonClass()}`}
            type="submit"
            value="Next"
          />
        </form>
      </div>
    );
  }
}

Landing.propTypes = propTypes;

export default Landing;
