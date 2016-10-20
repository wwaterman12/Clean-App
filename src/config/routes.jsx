import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/App.jsx';
import Main from '../components/Main.jsx';
import Landing from '../components/Landing.jsx';
import Login from '../components/Login.jsx';
import Finish from '../components/Finish.jsx';
import ServiceList from '../components/services/ServiceList.jsx';
import ProviderList from '../components/providers/ProviderList.jsx';
import ProviderDetails from '../components/providers/ProviderDetails.jsx';
import Register from '../components/register.jsx';
import ConfirmOrder from '../components/confirmorder.jsx';

const Routes = () => (
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <Route path="" component={Main} >
        <IndexRoute component={Landing} />
        <Route path="login" component={Login} />
        <Route path="finish" component={Finish} />
        {/* <Route path='register' component={CheckoutForm} />
        <Route path='payment' component={PaymentForm} />
        <Route path='finished' component={FinishPage} /> */}
        {/* <Route path='cart' component={ServicesMenu} />
        <Route path='availability' component={VendorList} />
        <Route path='vendor-details' component={VendorDisplay} /> */}
      </Route>
      <Route path="services" component={ServiceList} />
      <Route path="providers" >
        <IndexRoute component={ProviderList} />
        <Route path=":id" component={ProviderDetails} />
      </Route>
      <Route path="register" component={Register} />
      <Route path ="confirm-order" component={ConfirmOrder} />
    </Route>
  </Router>
);

export default Routes;
