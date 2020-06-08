import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageBySlug } from '@tipser/tipser-elements/dist/all';
import '../product-detail/product-detail.scss';

export default class CmsPage extends React.Component<RouteComponentProps<any>> {
  render() {
    const { pageSlug } = this.props.match.params;

    return (
      <React.Fragment>
        <main>
          <div className="container">
            <PageBySlug slug={pageSlug} />
          </div>
        </main>
      </React.Fragment>
    );
  }
}
