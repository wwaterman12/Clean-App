import React, { Component } from 'react';

const propTypes = {
  visible: React.PropTypes.bool,
  serviceType: React.PropTypes.string,
  handleIncreaseCount: React.PropTypes.func,
  handleDecreaseCount: React.PropTypes.func,
};

class ServiceIncrementor extends Component {
  constructor(props) {
    super(props);
    this.state = ({ visible: false });
    this.handleCount = this.handleCount.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { visible } = nextProps;
    this.setState({ visible });
  }
  setIncrementorClass() {
    if (this.state.visible === true) {
      return 'service-incrementor service-incrementor--shown';
    }
    return 'service-incrementor service-incrementor--hidden';
  }
  handleCount(e) {
    const { serviceType, handleIncreaseCount, handleDecreaseCount } = this.props;
    return e.target.getAttribute('class') === 'up' ? handleIncreaseCount(serviceType) : handleDecreaseCount(serviceType);
  }
  render() {
    const incrementorClass = this.setIncrementorClass();
    return (
      <div className={incrementorClass}>
        <button className="up" onClick={this.handleCount}>&and;</button>
        <button className="down" onClick={this.handleCount}>&or;</button>
      </div>
    );
  }
}

ServiceIncrementor.propTypes = propTypes;

export default ServiceIncrementor;
