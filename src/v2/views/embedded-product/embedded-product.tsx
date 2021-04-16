import React, { FC } from 'react';
import { withRouter } from 'react-router';

import { ProductPage } from 'tipser-elements-v2/dist/all';

const EmbeddedProductComponentDemo: FC<{ match: any }> = ({ match }) => {
  const { productId } = match.params;

  return <ProductPage productId={productId} />;
};

export const EmbeddedProductDemo = withRouter(EmbeddedProductComponentDemo);
