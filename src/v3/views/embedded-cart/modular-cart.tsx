import React from 'react';
import { CartProductList, CartSummary, ModularCart } from '@tipser/tipser-elements/dist/all';

export const EmbeddedCart = () => {
  return (
    <>
      <h2 style={{ maxWidth: '940px', margin: '30px auto' }}>Modular cart</h2>
      <div className="modular-cart">
        <ModularCart>
          <CartProductList />
          <CartSummary />
        </ModularCart>
      </div>
    </>
  );
};
