import React, { FC } from 'react';
import { withRouter } from 'react-router';

import { ProductTile, CartIcon } from '@tipser/tipser-elements/dist/all';

const PRODUCT_ID = '604ab0fe6772862e4b4266b1';

const ProductionTestComponent: FC<any> = ({ match }) => {
  const { productId } = match.params;

  return (
    <div style={{ minHeight: '52vh' }}>
      <CartIcon />
      <ProductTile productId={productId || PRODUCT_ID} />
    </div>
  );
};

export const ProductionTest = withRouter(ProductionTestComponent);
