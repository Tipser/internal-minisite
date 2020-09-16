import React, { FC } from 'react';
import {
  CheckoutData,
  CheckoutPayment,
  CustomerAddressBilling,
  CustomerAddressDelivery,
} from '@tipser/tipser-elements/dist/all';

type Props = {
  checkout: CheckoutData;
};

export const CheckoutPage2: FC<Props> = ({ checkout }) => (
  <div>
    <div className="progress-bar">
      <span className="step-2">
        <p>Delivery</p>
      </span>
    </div>
    <h2 className="te-multipage-label-step">Delivery & Payment</h2>
    <div className="te-multipage-columns">
      <div className="te-multipage-columns-wide">
        <p className="te-checkout-heading">Delivery Address</p>
        <CustomerAddressDelivery {...checkout} onCheckboxClick={() => null} />
        <p className="te-checkout-heading">Billing Address</p>
        <CustomerAddressBilling {...checkout} />
      </div>
      <div className="te-multipage-columns-narrow">
        <p className="te-checkout-heading">Payment</p>
        <CheckoutPayment {...checkout} />
      </div>
    </div>
  </div>
);
