import React, { FC, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, RouteProps } from 'react-router-dom';
import {
  TipserElementsProvider,
  Page,
  Checkout,
  TipserEnv,
  TipserLang,
  TipserContext,
} from '@tipser/tipser-elements/dist/all';
import Header from '../header';
import Footer from '../footer';
import './App.scss';
import '@tipser/tipser-elements/dist/index.css';
import { FrenchProduct } from '../../views/french-product/french-product';
import { CheckoutMultipage } from '../../views/checkout-multi-page/checkout-multipage';

const CONTENTFUL_PAGE_ID = '7sl4asGO6p0St5zOT5XFeH'; // https://app.contentful.com/spaces/i8t5uby4h6ds/entries/11sOn6krBDjuU0WmyAPKB6 5e5cc8df1f172b0001f8174d
const POS_ID = '5f738fdd023072000132ae3b';
const POS_ID_DIMENSION = 'dimension1';

declare const ga: any; //ga() function coming from analytics.js library

let tipserConfig = {
  lang: TipserLang.enUS,
  env: TipserEnv.localhost,
  primaryColor: '#222',
  useDefaultErrorHandler: true,
  openOldDialog: false,
  openOldCheckout: false,
  addToCartSettings: {
    directToCheckoutMode: false,
  },
};

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

let i = 0;

const X: FC = ({ children }) => {
  const context = useContext(TipserContext);
  useEffect(() => {
    const sdk = context.data.tipserSdk;
    const setPosData = () => sdk!.setPosData({ twoja_stara: { i: i++ } });
    setInterval(setPosData, 2000);
  }, []);
  return (<>{children}</>);
};

class RouteWithTeProvider extends RouteWithGA<{ posId: string }> {
  componentDidMount() {
    ga('set', POS_ID_DIMENSION, this.props.posId);
    super.componentDidMount();
  }

  render() {
    const { children, posId } = this.props;
    return (
      <TipserElementsProvider posId={posId} config={tipserConfig} isSentryEnabled={true}>
        <X>
          <div className="te-site">
            <Header />
            <div className="site-body">{children}</div>
            <Footer />
          </div>
        </X>
      </TipserElementsProvider>
    );
  }
}

// const PageWithSlug = withRouter((props) => <PageBySlug slug={props.match.params.slug} />);

const App = () => {
  return (
    <Router>
      <Switch>
        <RouteWithTeProvider exact path="/" posId={POS_ID}>
          <Page id={CONTENTFUL_PAGE_ID} />
        </RouteWithTeProvider>
        <RouteWithTeProvider path="/french-product" posId={POS_ID}>
          <FrenchProduct />
        </RouteWithTeProvider>
        <RouteWithTeProvider path="/checkout" posId={POS_ID}>
          <Checkout />
        </RouteWithTeProvider>
        <RouteWithTeProvider path="/checkout-multipage" posId={POS_ID}>
          <CheckoutMultipage />
        </RouteWithTeProvider>
      </Switch>
    </Router>
  );
};
export default App;
