import React, { FC } from 'react';
import {
  ModularCheckoutContextData,
  CheckoutPayment,
  CheckoutCustomerAddressBilling,
  CheckoutCustomerAddressDelivery,
} from '@tipser/tipser-elements/dist/all';

type Props = {
  checkout: ModularCheckoutContextData;
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
        <CheckoutCustomerAddressDelivery />
        <p className="te-checkout-heading">Billing Address</p>
        <CheckoutCustomerAddressBilling />
      </div>
      <div className="te-multipage-columns-narrow">
        <p className="te-checkout-heading">Payment</p>
        <CheckoutPayment />
      </div>
    </div>
  </div>
);
