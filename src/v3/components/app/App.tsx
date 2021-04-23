import React from 'react';
import { Route, RouteProps, useRouteMatch, withRouter } from 'react-router-dom';

import {
  TipserElementsProvider,
  Page,
  Checkout,
  TipserEnv,
  TipserLang,
  ProductPage,
  ModularProduct,
  ProductSimilarProducts,
  ProductStyleWithProducts,
  ProductDescription,
  ProductContainer,
} from '@tipser/tipser-elements/dist/all';
import Header from '../header';
import Footer from '../footer';
import { CustomCollection } from '../../views/custom-collection/custom-collection';
import { ModularProducts } from '../../views/modular-products/modular-products';
import './App.scss';
import '@tipser/tipser-elements/dist/index.css';
import { FrenchProduct } from '../../views/french-product/french-product';
import { CheckoutMultipage } from '../../views/checkout-multi-page/checkout-multipage';
import { EmbeddedProductDemo } from '../../views/embedded-product';
import { ThumbnailsDemo } from '../../views/product-image-with-thumbnails/thumbnails-demo';
import { TipserElementsConfig } from '@tipser/tipser-elements/dist/config';
import { ProductionTest } from '../../views/production-test';
import { EmbeddedCart } from '../../views/embedded-cart/modular-cart';
import { Switch } from 'react-router';

const CONTENTFUL_PAGE_ID = '7sl4asGO6p0St5zOT5XFeH'; // https://app.contentful.com/spaces/i8t5uby4h6ds/entries/11sOn6krBDjuU0WmyAPKB6 5e5cc8df1f172b0001f8174d
const POS_ID = '5f738fdd023072000132ae3b';
const POS_ID_DIMENSION = 'dimension1';
declare const ga: any; //ga() function comng from analytics.js  library

const qs = window.location.search
  .replace(/^\?/, '')
  .split('&')
  .map((param) => param.split('='))
  .filter(([key]) => key === 'lang')
  .map(([_, value]) => value)[0];

function asTipserLang(lang: string): TipserLang {
  if (Object.values(TipserLang).includes(lang as TipserLang)) {
    return lang as TipserLang;
  }
  return TipserLang.enGB;
}

let tipserConfig = {
  lang: asTipserLang(qs),
  env: TipserEnv.stage,
  primaryColor: '#222',
  useDefaultErrorHandler: true,
  openOldDialog: false,
  openOldCheckout: false,
  modalUi: {
    hideSimilarProducts: false,
  },
  addToCartSettings: {
    directToCheckoutMode: false,
  },
  enableCheckoutV2: true,
  // customUrls: {
  //   checkoutUrl: '/checkout',
  //   checkoutConfirmationUrl: '/checkout-confirmation',
  //   productBaseUrl: '/modular-product-default',
  // },
};

const RouterHistory = withRouter(({ children, history }: any) => {
  return children(history);
});

class RouteWithGA<T> extends Route<T & RouteProps> {
  componentDidMount() {
    ga('send', 'pageview');
  }

  componentDidUpdate(prevProps: RouteProps) {
    if (!prevProps.location || !this.props.location) {
      return;
    }
    if (prevProps.location.pathname !== this.props.location.pathname) {
      ga('set', 'page', this.props.location.pathname);
      ga('send', 'pageview');
    }
  }
}

class RouteWithTeProvider extends RouteWithGA<{ posId: string; overrideConfig?: Partial<TipserElementsConfig> }> {
  componentDidMount() {
    ga('set', POS_ID_DIMENSION, this.props.posId);
    super.componentDidMount();
  }

  onLangChange = (lang) => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('lang', lang);
    // eslint-disable-next-line no-restricted-globals
    history.replaceState(null, '', '?' + queryParams.toString());
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  render() {
    const { children, posId } = this.props;
    const overrideConfig = this.props.overrideConfig || {};
    return (
      <RouterHistory>
        {(history) => {
          return (
            <TipserElementsProvider
              posId={posId}
              config={{ ...tipserConfig, ...overrideConfig } as any}
              history={history}
            >
              <div className="te-site">
                <Header onLangChange={this.onLangChange} />
                <div className="site-body">{children}</div>
                <Footer />
              </div>
            </TipserElementsProvider>
          );
        }}
      </RouterHistory>
    );
  }
}

// const PageWithSlug = withRouter((props) => <PageBySlug slug={props.match.params.slug} />);

const App = () => {
  const { url } = useRouteMatch() as any;
  return (
    <Switch>
      <RouteWithTeProvider exact path={`${url}/`} posId={POS_ID}>
        <Page id={CONTENTFUL_PAGE_ID} />
        <CustomCollection />
        <ModularProducts />
      </RouteWithTeProvider>
      <RouteWithTeProvider path={`${url}/thumbnails`} posId={POS_ID}>
        <ThumbnailsDemo />
      </RouteWithTeProvider>
      <RouteWithTeProvider exact path={`${url}/embedded-cart`} posId={POS_ID}>
        <EmbeddedCart />
      </RouteWithTeProvider>

      <RouteWithTeProvider path={`${url}/modular-product-default/:productId`} posId={POS_ID}>
        <EmbeddedProductDemo />
      </RouteWithTeProvider>
      <RouteWithTeProvider path={`${url}/modular-product-default`} posId={POS_ID}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '50px' }}>
          <ProductPage productId="5c751cf82d3f3b0001bcec8c" />
        </div>
      </RouteWithTeProvider>

      <RouteWithTeProvider path={`${url}/modular-product`} posId={POS_ID}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '50px' }}>
          <ModularProduct productId="5c751cf82d3f3b0001bcec8c">
            <ProductDescription />
            <ProductStyleWithProducts />
            <ProductContainer />
            <ProductSimilarProducts />
          </ModularProduct>
        </div>
      </RouteWithTeProvider>
      <RouteWithTeProvider path={`${url}/french-product`} posId={POS_ID}>
        <FrenchProduct />
      </RouteWithTeProvider>
      <RouteWithTeProvider path={`${url}/checkout`} posId={POS_ID}>
        <Checkout />
      </RouteWithTeProvider>
      <RouteWithTeProvider path={`${url}/checkout-confirmation`} posId={POS_ID}>
        <Checkout />
      </RouteWithTeProvider>
      <RouteWithTeProvider path={`${url}/checkout-multipage`} posId={POS_ID}>
        <CheckoutMultipage />
      </RouteWithTeProvider>
      <RouteWithTeProvider path={`${url}/embedded-product/:productId`} posId={POS_ID}>
        <EmbeddedProductDemo />
      </RouteWithTeProvider>

      <RouteWithTeProvider
        path={`${url}/production-test/:productId?`}
        posId="5f738fdd023072000132ae3b"
        overrideConfig={{ env: TipserEnv.prod }}
      >
        <ProductionTest />
      </RouteWithTeProvider>
    </Switch>
  );
};

export default App;
