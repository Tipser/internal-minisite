import React, { FC } from 'react';
import { Route, Switch, useParams } from 'react-router';
import { useRouteMatch } from 'react-router-dom';
import {
  CheckoutCustomerAddressDelivery,
  CheckoutOrderConfirmation, CheckoutPayment, CheckoutPaymentRequestButton,
  CheckoutProductList, CheckoutSummary,
  ModularCheckout,
  ProductPage,
  ProductTile,
} from '@tipser/tipser-elements/dist/all';

import './express-payment.scss'

const DEFAULT_PRODUCT_ID = '60479d1fdb3410ad13e27fab';

const Home = () => {
  const { productId } = useParams<{ productId: string }>();

  return (
    <>
      <ProductTile productId={productId || DEFAULT_PRODUCT_ID} />
    </>
  );
};
const ProductSubpage = () => {
  const { productId } = useParams<{ productId: string }>();
  return (
    <ProductPage productId={productId} />
  );
};

const ConfirmationSubpage = () => (
  <div>
    <div>Checkout complete!</div>
    <ModularCheckout>
      <ModularCheckout.Confirmed>
        <CheckoutOrderConfirmation />
      </ModularCheckout.Confirmed>
    </ModularCheckout>
  </div>
);

const CheckoutSubpage = () => (
  <div>
    <h3>Checkout Page</h3>
    <ModularCheckout>
      <h1 style={{ textAlign: 'center' }}>Products</h1>
      <CheckoutProductList />
      <CheckoutSummary />
      <h1 style={{ textAlign: 'center' }}>Delivery address</h1>
      <CheckoutCustomerAddressDelivery />
      <h1 style={{ textAlign: 'center' }}>Payment</h1>
      <div className={'express-pay-button-wrapper'}>
        <CheckoutPaymentRequestButton dependsOn={'validAddress'} className={'express-pay-button'} />
      </div>
      <CheckoutPayment dependsOn={'validAddress'} className={'classic-pay-section'} />
    </ModularCheckout>
  </div>
);

const CheckoutExperimentalSubpage = () => (
  <div>
    <h3>Checkout Page</h3>
    <ModularCheckout>
      <h1 style={{ textAlign: 'center' }}>Products</h1>
      <CheckoutProductList />
      <CheckoutSummary />
      <h1 style={{ textAlign: 'center' }}>Payment</h1>
      <CheckoutPaymentRequestButton useStandaloneAddressForm={true} />
    </ModularCheckout>
  </div>
);

export const ExpressPayment: FC = () => {
  const { url } = useRouteMatch() as any;
  return (
    <div style={{ minHeight: '52vh' }} className="express-payment-demo">
      <Switch>
        <Route path={`${url}/express-payment/product/:productId`} component={ProductSubpage} />
        <Route path={`${url}/express-payment/checkout`} component={CheckoutSubpage} />
        <Route path={`${url}/express-payment/checkout-experimental`} component={CheckoutExperimentalSubpage} />
        <Route path={`${url}/express-payment/confirmation`} component={ConfirmationSubpage} />
        <Route path={`${url}/express-payment/:productId?`} exact component={Home} />
      </Switch>

    </div>
  );
};

