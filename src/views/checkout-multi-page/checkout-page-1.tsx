import React, { FC } from 'react';
import { CartProducts, CartPromoCode, CartSummary } from '@tipser/tipser-elements/dist/all';
import { Link } from 'react-router-dom';
import { CheckoutData } from '@tipser/tipser-elements/dist/all';
import './checkout-multipage.scss';

type Props = {
  checkout: CheckoutData;
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
        <CartProducts {...checkout} />
      </div>
      <div className="te-multipage-columns-narrow">
        <p className="te-checkout-heading">
          Order Summary <span>({checkout.shoppingCart.items.length})</span>
        </p>
        <CartSummary {...checkout} />
        <CartPromoCode {...checkout} />
        <div className="te-next-step">
          <Link to={'/checkout-multipage/step-2'}>Checkout as guest</Link>
        </div>
      </div>
    </div>
  </div>
);
