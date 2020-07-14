import React from 'react';
import { CartProducts, CartSummary } from '@tipser/tipser-elements/dist/all';
import { Link } from 'react-router-dom';

export const CheckoutPage1 = ({shoppingCart}) =>
  <div>
    <div>Step 1</div>
    <CartProducts shoppingCart={shoppingCart} />
    <CartSummary shoppingCart={shoppingCart} />
    <Link to={"/checkout-multipage/step-2"}>To step 2</Link>
  </div>;