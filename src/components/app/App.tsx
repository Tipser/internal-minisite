import React from 'react';
import { BrowserRouter as Router, Route, Switch, RouteProps } from 'react-router-dom';
import { TipserElementsProvider, Page, Checkout, TipserEnv, TipserLang } from '@tipser/tipser-elements/dist/all';
import Header from '../header';
import Footer from '../footer';
import './App.scss';
import '@tipser/tipser-elements/dist/index.css';
import { CheckoutModular } from '../../views/checkout-modular/checkout-modular';
import { FrenchProduct } from '../../views/french-product/french-product';
import { CheckoutMultipage } from '../../views/checkout-multi-page/checkout-multipage';

const CONTENTFUL_PAGE_ID = '7sl4asGO6p0St5zOT5XFeH'; // https://app.contentful.com/spaces/i8t5uby4h6ds/entries/11sOn6krBDjuU0WmyAPKB6 5e5cc8df1f172b0001f8174d
const POS_ID = '5ec2a394ff865d0001b7e06e';
const POS_ID_DIMENSION = 'dimension1';

declare const ga: any; //ga() function coming from analytics.js library

let tipserConfig = {
  lang: TipserLang.svSE,
  env: TipserEnv.dev,
  primaryColor: '#222',
  useDefaultErrorHandler: true,
  openOldDialog: false,
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

class RouteWithTeProvider extends RouteWithGA<{ posId: string }> {
  componentDidMount() {
    ga('set', POS_ID_DIMENSION, this.props.posId);
    super.componentDidMount();
  }

  render() {
    const { children, posId } = this.props;
    return (
      <TipserElementsProvider posId={posId} config={tipserConfig} isSentryEnabled={true}>
        <div className="te-site">
          <Header />
          <div className="site-body">{children}</div>
          <Footer />
        </div>
      </TipserElementsProvider>
    );
  }
}

// const PageWithSlug = withRouter((props) => <PageBySlug slug={props.match.params.slug} />);

class App extends React.Component {
  render() {
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
          <RouteWithTeProvider path="/checkout-modular" posId={POS_ID}>
            <CheckoutModular />
          </RouteWithTeProvider>
          <RouteWithTeProvider path="/checkout-multipage" posId={POS_ID}>
            <CheckoutMultipage />
          </RouteWithTeProvider>
        </Switch>
      </Router>
    );
  }
}

export default App;
