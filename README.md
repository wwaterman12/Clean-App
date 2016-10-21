# Clean-App
E-commerce platform for cleaning services

ROUTES
<Router history={hashHistory} >
        <Route path='/' component={App} >
          <IndexRoute path='main' component={Main} >
            <IndexRoute path='zip' component={Landing} />
            <Route path='login' component={LoginForm} />
            <Route path='register' component={CheckoutForm} />
            <Route path='payment' component={PaymentForm} />
            <Route path='finished' component={FinishPage} />
          </IndexRoute>
          <Route path='cart' component={ServicesMenu} />
          <Route path='availability' component={VendorList} />
          <Route path='vendor-details' component={VendorDisplay} />
        </Route>
      </Router>

      setSubmitButtonClass () {
    const { airCondition1, airCondition2, rangeHood, bathroom, toilet } = this.state;
    if ((airCondition1 || airCondition2 || rangeHood || bathroom || toilet) > 0) {
      return 'service-bottom-button--active';
    }
    else {
      return 'service-bottom-button--inactive';
    }
  }


COMPONENTS
main (header+menu)
landing (zip input)
loginform
servicelist
serviceitem
servicemodal
vendorlist
vendoritem
vendordisplay
registerform
orderview
paymentform
finishpage


GLOBAL STATES
current user data
services
availabilities
selected service data
price
