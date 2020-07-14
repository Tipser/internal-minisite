import React from 'react';
import { CheckoutPayment } from '@tipser/tipser-elements/dist/all';

export const CheckoutPage2 = ({checkoutData}) => <div>
  <div>Step 2</div>
  <CheckoutPayment checkoutData={checkoutData} />
</div>;