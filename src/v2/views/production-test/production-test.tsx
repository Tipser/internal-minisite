import React, { FC } from 'react';
import { useParams } from 'react-router';

import { ProductTile, Cart } from 'tipser-elements-v2/dist/all';

type Props = {
  defaultProductId: string;
};
export const ProductionTest: FC<Props> = ({ defaultProductId }) => {
  const { productId } = useParams();

  return (
    <div style={{ minHeight: '52vh' }}>
      <Cart />
      <ProductTile productId={productId || defaultProductId} />
    </div>
  );
};
