import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/App.jsx';
import Main from '../components/Main.jsx';
import Landing from '../components/Landing.jsx';

export default class Routes extends React.Component {
  render () {
    return (
      <Router history={hashHistory} >
        <Route path='/' component={App} >
          <Route path='' component={Main} >
            <IndexRoute component={Landing} ></IndexRoute>
            {/* <Route path='login' component={LoginForm} />
            <Route path='register' component={CheckoutForm} />
            <Route path='payment' component={PaymentForm} />
            <Route path='finished' component={FinishPage} /> */}
          {/* <Route path='cart' component={ServicesMenu} />
          <Route path='availability' component={VendorList} />
          <Route path='vendor-details' component={VendorDisplay} /> */}
          </Route>
        </Route>
      </Router>
    );
  }
}
