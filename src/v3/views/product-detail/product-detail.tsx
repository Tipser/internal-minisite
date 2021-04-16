import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
// eslint-disable-next-line
import { Product } from '@tipser/tipser-elements/dist/all';
import './product-detail.scss';

class ProductDetailViewComponent extends React.Component<RouteComponentProps<any>> {
  render() {
    const { productId } = this.props.match.params;
    // const { similarProductsFetch } = this.props;

    return (
      <React.Fragment>
        <main className="te-page">
          <div className="container">
            <Product productId={productId} />
            {/* <h4>Product card</h4>
            <Product productId={productId} renderer="card" />
            <h4>Product card compact</h4>
            <Product productId={productId} viewMode="compact" /> */}
          </div>
        </main>
      </React.Fragment>
    );
  }
}

// const ProductDetailView = connect(props => ({
//     similarProductsFetch: `https://t3-prod-api.tipser.com/v3/products/${props.match.params.productId}/similar?onlyAvailable=true`,
// }))(ProductDetailViewComponent);

export default ProductDetailViewComponent;
