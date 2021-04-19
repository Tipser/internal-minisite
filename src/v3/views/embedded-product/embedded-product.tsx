import React, { FC } from 'react';

import { ProductPage } from '@tipser/tipser-elements/dist/all';
import { useParams } from 'react-router';

export const EmbeddedProductDemo: FC = () => {
  const { productId } = useParams<any>();

  return <ProductPage productId={productId} />;
};
