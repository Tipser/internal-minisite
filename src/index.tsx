import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './index.scss';
import './common/site.scss';
import AppV2 from './v2/components/app/App';
import AppV3 from './v3/components/app/App';
import * as serviceWorker from './serviceWorker';
import { marketParamValues } from './market-config';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={`/v2/:market(${marketParamValues})`} component={AppV2} />
        <Route path={`/v3/:market(${marketParamValues})`} component={AppV3} />
        <Redirect path="/v2" to="/v2/us" />
        <Redirect path="*" to="/v3/us" />
      </Switch>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
