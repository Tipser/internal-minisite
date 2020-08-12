import React, { FC } from 'react';
import { CheckoutData, CheckoutPayment } from '@tipser/tipser-elements/dist/all';

type Props = {
  checkout: CheckoutData;
};

export const CheckoutPage2: FC<Props> = ({ checkout }) => (
  <div>
    <div className="te-multipage-label-step">Step 2</div>
    <CheckoutPayment {...checkout} />
  </div>
);
