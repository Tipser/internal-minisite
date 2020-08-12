import React, { FC } from 'react';
import { CartProducts, CartSummary, CustomerAddressDelivery } from '@tipser/tipser-elements/dist/all';
import { Link } from 'react-router-dom';
import { CheckoutData } from '@tipser/tipser-elements/dist/all';
import './checkout-multipage.scss';

type Props = {
  checkout: CheckoutData;
};

export const CheckoutPage1: FC<Props> = ({ checkout }) => (
  <div>
    <div className="te-multipage-label-step">Step 1</div>
    <CartProducts {...checkout} />
    <CustomerAddressDelivery {...checkout} />
    <CartSummary {...checkout} />

    <div className="te-next-step">
      <Link to={'/checkout-multipage/step-2'}>To step 2</Link>
    </div>
  </div>
);
