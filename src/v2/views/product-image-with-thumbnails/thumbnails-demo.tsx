import React from 'react';
import { ModularProduct, ProductImage, ProductThumbnails } from 'tipser-elements-v2/dist/all';
import './thumbnails-demo.scss';

export const ThumbnailsDemo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>Props for ProductImage : </h3>
      enableDots, enableSwipe, swipeAnimation, enableArrows,
      <h3>Props for ProductThumbnails : </h3>
      direction: 'horizontal' | 'vertical', imageFit: 'contain' | 'cover';
      <h1>Product mobile version</h1>
      <code>{'<ProductImage enableDots swipeAnimation enableSwipe enableArrows/>'}</code>
      <ModularProduct productId="5c751cf82d3f3b0001bcec8c">
        <div style={{ width: '350px', height: '500px', marginBottom: '10px' }}>
          <ProductImage enableDots swipeAnimation enableSwipe enableArrows />
        </div>
      </ModularProduct>
      <h1>Product tablet version</h1>
      <code>{'<ProductImage />'}</code>
      <code>{'<ProductThumbnails />'}</code>
      <ModularProduct productId="5c751cf82d3f3b0001bcec8c">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '350px', height: '100%', marginBottom: '10px' }}>
            <ProductImage />
          </div>
          <div style={{ height: '100px', width: '350px' }}>
            <ProductThumbnails />
          </div>
        </div>
      </ModularProduct>
      <h1>Product desktop version</h1>
      <code>{"<ProductThumbnails direction='vertical' />"}</code>
      <code>{'<ProductImage />'}</code>
      <ModularProduct productId="591b0c1a8aa0ce139c72dd33">
        <div style={{ display: 'flex', width: '700px', height: '700px' }}>
          <div style={{ height: '100%', marginRight: '20px' }}>
            <ProductThumbnails direction="vertical" />
          </div>

          <div style={{ width: '100%', overflow: 'hidden' }}>
            <ProductImage />
          </div>
        </div>
      </ModularProduct>
      <h1>ProductThumbnails and ImageFit props : </h1>
      <ModularProduct productId="5c751cf82d3f3b0001bcec8c">
        <h3>imageFit="cover" </h3>
        <div style={{ height: '300px', width: '800px' }}>
          <ProductThumbnails />
        </div>
        <h3>imageFit="contain" </h3>
        <div style={{ height: '300px', width: '800px' }}>
          <ProductThumbnails imageFit="contain" />
        </div>
      </ModularProduct>
      <h1>ProductThumbnails different containers ratio : </h1>
      <ModularProduct productId="5c751cf82d3f3b0001bcec8c">
        <h3>height: '100px', width: '800px' </h3>
        <div style={{ height: '100px', width: '800px' }}>
          <ProductThumbnails />
        </div>
        <h3>height: '200px', width: '600px' </h3>
        <div style={{ height: '200px', width: '600px' }}>
          <ProductThumbnails />
        </div>
      </ModularProduct>
      <ModularProduct productId="591b0c1a8aa0ce139c72dd33">
        <h3>height: '300px', width: '800px' </h3>
        <div style={{ height: '300px', width: '800px' }}>
          <ProductThumbnails />
        </div>
        <h3>height: '500px', width: '1000px' </h3>
        <div style={{ height: '500px', width: '1000px' }}>
          <ProductThumbnails />
        </div>
      </ModularProduct>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ margin: '0 100px' }}>
          <ModularProduct productId="5c751cf82d3f3b0001bcec8c">
            <h3>height: '800px' </h3>
            <div style={{ height: '800px' }}>
              <ProductThumbnails direction="vertical" />
            </div>
            <h3>height: '600px' </h3>
            <div style={{ height: '600px' }}>
              <ProductThumbnails direction="vertical" />
            </div>
          </ModularProduct>
        </div>

        <div style={{ margin: '0 100px' }}>
          <ModularProduct productId="6033793cf99b72000149a0cc">
            <h3>height: '200px' </h3>
            <div style={{ height: '200px' }}>
              <ProductThumbnails direction="vertical" />
            </div>
            <h3>height: '1000px' </h3>
            <div style={{ height: '1000px' }}>
              <ProductThumbnails direction="vertical" />
            </div>
          </ModularProduct>
        </div>

        <div style={{ margin: '0 100px' }}>
          <ModularProduct productId="591b0c1a8aa0ce139c72dd33">
            <h3>height: '300px' </h3>
            <div style={{ height: '300px' }}>
              <ProductThumbnails direction="vertical" />
            </div>
            <h3>height: '500px' </h3>
            <div style={{ height: '500px' }}>
              <ProductThumbnails direction="vertical" />
            </div>
          </ModularProduct>
        </div>
      </div>
      <h1>ProductImage enableSwipe props</h1>
      <code>{'<ProductImage enableSwipe />'}</code>
      <ModularProduct productId="5c751cf82d3f3b0001bcec8c">
        <div style={{ display: 'flex', width: '800px', height: '400px' }}>
          <div style={{ width: '300px', overflow: 'hidden', marginRight: '50px' }}>
            <ProductImage />
          </div>

          <div style={{ width: '300px', overflow: 'hidden' }}>
            <ProductImage enableSwipe />
          </div>
        </div>
      </ModularProduct>
      <h1>ProductImage swipeAnimation props</h1>
      <code>{"<ProductThumbnails direction='vertical' />"}</code>
      <code>{'<ProductImage swipeAnimation />'}</code>
      <ModularProduct productId="591b0c1a8aa0ce139c72dd33">
        <div style={{ display: 'flex', width: '700px', height: '700px' }}>
          <div style={{ height: '100%', marginRight: '20px' }}>
            <ProductThumbnails direction="vertical" />
          </div>

          <div style={{ width: '100%', overflow: 'hidden' }}>
            <ProductImage swipeAnimation />
          </div>
        </div>
      </ModularProduct>
      <h1>ProductImage enableArrows props</h1>
      <code>{'<ProductImage enableArrows />'}</code>
      <ModularProduct productId="5c751cf82d3f3b0001bcec8c">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '350px', height: '100%', marginBottom: '10px' }}>
            <ProductImage enableArrows />
          </div>
          <div style={{ height: '100px', width: '350px' }}>
            <ProductThumbnails />
          </div>
        </div>
      </ModularProduct>
    </div>
  );
};
