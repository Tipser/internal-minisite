import React, { FC } from 'react';
import { Route, Switch, useParams } from 'react-router';
import { useRouteMatch } from 'react-router-dom';
import {
  CheckoutCustomerAddressDelivery,
  CheckoutOrderConfirmation,
  CheckoutPaymentRequestButton,
  CheckoutProductList,
  CheckoutSummary,
  ModularCheckout,
  ProductPage,
  ProductTile,
} from 'tipser-elements-v2/dist/all';

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
  return <ProductPage productId={productId} />;
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
      <CheckoutPaymentRequestButton />
    </ModularCheckout>
  </div>
);

export const ExpressPayment: FC = () => {
  const { url } = useRouteMatch() as any;
  return (
    <div style={{ minHeight: '52vh' }}>
      <Switch>
        <Route path={`${url}/product/:productId`} component={ProductSubpage} />
        <Route path={`${url}/checkout`} component={CheckoutSubpage} />
        <Route path={`${url}/confirmation`} component={ConfirmationSubpage} />
        <Route path={`${url}/:productId?`} exact component={Home} />
      </Switch>
    </div>
  );
};
