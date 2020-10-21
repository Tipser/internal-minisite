import React from 'react';
import FakeProductTile from '../../assets/fakeProductTile.png';
import './modular-products.scss';

export const ModularProducts = () => {
  return (
    <>
      <h2 style={{ maxWidth: '940px', margin: '30px auto' }}>Modular Products</h2>
      <div className="modular-products">
        <a href="/modular-product-default">
          <div className="modular-products-tile">
            <img src={FakeProductTile} alt="" />
            <div className="modular-products-text">Modular Product Default</div>
          </div>
        </a>

        <a href="/modular-product">
          <div className="modular-products-tile">
            <img src={FakeProductTile} alt="" />
            <div className="modular-products-text">Modular Product Custom</div>
          </div>
        </a>
      </div>
    </>
  );
};
