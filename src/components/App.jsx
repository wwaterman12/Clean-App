import React, { Component } from 'react';
import TopNav from './TopNav.jsx';

class App extends Component {
  render () {
    return (
      <div className="app">
        <TopNav />
        {this.props.children}
      </div>
    );
  }
}

export default App;
