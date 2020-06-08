import React from 'react';
import { BrowserRouter as Router, Route, Switch, RouteProps, withRouter } from 'react-router-dom';
import { TipserElementsProvider, Page, PageBySlug, Cart } from '@tipser/tipser-elements';
import Header from '../header';
import Footer from '../footer';
import './App.scss';
import '@tipser/tipser-elements/dist/index.css';

const CONTENTFUL_PAGE_ID = '66xk8jQDYIxDCArBNQgUD8'; // https://app.contentful.com/spaces/i8t5uby4h6ds/entries/11sOn6krBDjuU0WmyAPKB6
const DN_POS_ID = '5e6f6a3ee32c210001831a15';
const SECOND_POS_ID = '5bd1c279b7f6ff000181753f';
const POS_ID_DIMENSION = 'dimension1';

declare const ga: any; //ga() function coming from analytics.js library

let tipserConfig = {
  lang: 'sv',
  env: 'prod',
  primaryColor: '#da000d',
  useDefaultErrorHandler: true,
  openOldDialog: true,
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

const PageWithSlug = withRouter((props) => <PageBySlug slug={props.match.params.slug} />);

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <RouteWithTeProvider exact path="/" posId={DN_POS_ID}>
            <Page id={CONTENTFUL_PAGE_ID} />
          </RouteWithTeProvider>
          {/* <RouteWithTeProvider path="/hlr" posId={SECOND_POS_ID}>
            <PageBySlug slug="hlr" />
          </RouteWithTeProvider>
          <RouteWithTeProvider path="/:slug" posId={DN_POS_ID}>
            <PageWithSlug />
          </RouteWithTeProvider> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
