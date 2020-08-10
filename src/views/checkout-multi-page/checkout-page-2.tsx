import React, { FC } from 'react';
import { CheckoutData, CheckoutPayment } from '@tipser/tipser-elements/dist/all';

type Props = {
  checkout: CheckoutData
}

export const CheckoutPage2: FC<Props> = ({checkout}) => <div>
  <div>Step 2</div>
  <CheckoutPayment {...checkout} />
</div>;