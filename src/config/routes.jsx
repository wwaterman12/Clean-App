import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

export default class Routes extends React.Component {
  render () {
    return (
      <Router history={hashHistory} >
        <Route path='/' component={App} >
          <IndexRoute path='main' component={Main} >
            <IndexRoute path='zip' component={Landing} />
            <Route path='login' component={LoginForm} />
            <Route path='register' component={CheckoutForm} />
            <Route path='payment' component={PaymentForm} />
            <Route path='finished' component={FinishPage}
          </IndexRoute>
          <Route path='cart' component={ServicesMenu} />
          <Route path='availability' component={VendorList} />
          <Route path='vendor-details' component={VendorDisplay} />
        </Route>
      </Router>
    );
  }
}
