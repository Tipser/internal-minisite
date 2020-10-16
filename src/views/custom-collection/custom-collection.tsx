import React from 'react';
import { Collection, Store } from '@tipser/tipser-elements/dist/all';
import './custom-collection.scss';

export const CustomCollection = () => {
  return (
    <div className="custom-collections">
      <h2>Collection with defined image container</h2>
      <div className="custom-collection-base">
        <Collection collectionId="5f675d6a05c9dc00013bfb48" />
      </div>
      <h2>Collection with defined product tiles</h2>
      <div className="custom-collection-shadowed">
        <Collection collectionId="5f675d6a05c9dc00013bfb48" />
      </div>
      <h2>Collection with bordered product tiles</h2>
      <div className="custom-collection-bordered">
        <Collection collectionId="5f675d6a05c9dc00013bfb48" />
      </div>
      <h2>Collection with horizontal orientation</h2>
      <div className="custom-collection-columns">
        <Collection collectionId="5f675d6a05c9dc00013bfb48" />
      </div>
      <h2>Store</h2>
      <div className="custom-collection-shadowed">
        <Store posId="59e86b79b8f3f60a94ecd26a" />
      </div>
    </div>
  );
};
