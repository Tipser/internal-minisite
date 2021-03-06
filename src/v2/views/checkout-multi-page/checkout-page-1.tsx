import React, { FC } from 'react';
import {
  CheckoutCartProducts,
  CheckoutCartPromoCode,
  CheckoutCartSummary,
  LegacyModularCheckoutContextData,
} from 'tipser-elements-v2/dist/all';
import { Link } from 'react-router-dom';
import './checkout-multipage.scss';

type Props = {
  checkout: LegacyModularCheckoutContextData;
};

export const CheckoutPage1: FC<Props> = ({ checkout }) => (
  <div>
    <div className="progress-bar">
      <span>
        <p>Shopping bag</p>
      </span>
    </div>
    <h2 className="te-multipage-label-step">Shopping Bag</h2>
    <div className="te-multipage-columns">
      <div className="te-multipage-columns-wide">
        <p className="te-checkout-heading">
          My Cart <span>({checkout.shoppingCart.items.length})</span>
        </p>
        <CheckoutCartProducts />
      </div>
      <div className="te-multipage-columns-narrow">
        <p className="te-checkout-heading">
          Order Summary <span>({checkout.shoppingCart.items.length})</span>
        </p>
        <CheckoutCartSummary />
        <CheckoutCartPromoCode />
        <div className="te-next-step">
          <Link to={'/checkout-multipage/step-2'}>Checkout as guest</Link>
        </div>
      </div>
    </div>
  </div>
);
