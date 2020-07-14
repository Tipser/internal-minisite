import React from 'react';
import { CartProducts, CartSummary, Checkout, CheckoutPayment } from '@tipser/tipser-elements/dist/all';

export const CheckoutModular = () =>
  <Checkout>
  {(shoppingCart, checkoutData) => (
    <div>
      <CheckoutPayment checkoutData={checkoutData} />
      <CartSummary shoppingCart={shoppingCart} />
      <CartProducts shoppingCart={shoppingCart} />
    </div>
  )}
  </Checkout>