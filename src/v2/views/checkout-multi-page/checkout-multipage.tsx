import React from 'react';
import {
  LegacyModularCheckoutContextData,
  ModularCheckout,
  ModularCheckoutContextData,
} from 'tipser-elements-v2/dist/all';
import { Route, Switch, withRouter } from 'react-router';
import { CheckoutPage1 } from './checkout-page-1';
import { CheckoutPage2 } from './checkout-page-2';
import './checkout-multipage.scss';

export function isLegacyCheckout(context: ModularCheckoutContextData): context is LegacyModularCheckoutContextData {
  return context.checkoutVersion === 'legacy';
}

export const CheckoutMultipage = withRouter(({ match }) => {
  return (
    <div className="te-multipage-wrapper">
      <ModularCheckout>
        {(checkout) =>
          isLegacyCheckout(checkout) ? (
            <Switch>
              <Route path={`${match.url}/step-1`}>
                <CheckoutPage1 checkout={checkout} />
              </Route>
              <Route path={`${match.url}/step-2`}>
                <CheckoutPage2 checkout={checkout} />
              </Route>
            </Switch>
          ) : null
        }
      </ModularCheckout>
    </div>
  );
});
