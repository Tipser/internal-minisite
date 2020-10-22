import React, { FC } from 'react';
import { withRouter } from 'react-router';

import { ProductContext } from '@tipser/tipser-elements/dist/all';

const EmbeddedProductComponentDemo: FC<{ match: any }> = ({ match }) => {
  const { productId } = match.params;

  return <ProductContext productId={productId} />;
};

export const EmbeddedProductDemo = withRouter(EmbeddedProductComponentDemo);
