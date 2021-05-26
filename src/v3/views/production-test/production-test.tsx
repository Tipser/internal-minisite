import React, { FC } from 'react';
import { useParams } from 'react-router';

import { ProductTile, CartIcon } from '@tipser/tipser-elements/dist/all';

type Props = {
  defaultProductId: string;
};
export const ProductionTest: FC<Props> = ({ defaultProductId }) => {
  const { productId } = useParams();

  return (
    <div style={{ minHeight: '52vh' }}>
      <CartIcon />
      <ProductTile productId={productId || defaultProductId} />
    </div>
  );
};
