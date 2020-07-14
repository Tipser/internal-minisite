import React from 'react';
import { Checkout } from '@tipser/tipser-elements/dist/all';
import { Route, Switch, withRouter } from 'react-router';
import { CheckoutPage1 } from './checkout-page-1';
import { CheckoutPage2 } from './checkout-page-2';

export const CheckoutMultipage = withRouter(({ match }) =>
  <div>
    <div>Checkout multipage</div>
    <Checkout>
      {(shoppingCart, checkoutData) => (
        <Switch>
          <Route path={`${match.url}/step-1`}>
            <CheckoutPage1 shoppingCart={shoppingCart}/>
          </Route>
          <Route path={`${match.url}/step-2`}>
            <CheckoutPage2 checkoutData={checkoutData}/>
          </Route>
        </Switch>
      )}
    </Checkout>
  </div>,
);