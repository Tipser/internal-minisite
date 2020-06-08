import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Store } from '@tipser/tipser-elements/dist/all';

class StorePage extends React.Component<RouteComponentProps<any>> {
  render() {
    // const { productId } = this.props.match.params;
    // const { similarProductsFetch } = this.props;

    return (
      <React.Fragment>
        <main>
          <div className="container">
            <h4>Store</h4>
            <Store />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default StorePage;
