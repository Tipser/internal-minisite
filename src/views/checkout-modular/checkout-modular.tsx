import React from 'react';
import { CartProducts, CartSummary, Checkout, CheckoutPayment } from '@tipser/tipser-elements/dist/all';

export const CheckoutModular = () =>
  <Checkout>
  {(checkout) => (
    <div>
      <CheckoutPayment {...checkout} />
      <CartSummary {...checkout} />
      <CartProducts {...checkout} />
    </div>
  )}
  </Checkout>;