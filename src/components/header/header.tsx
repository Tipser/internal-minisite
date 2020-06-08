import * as React from 'react';
// eslint-disable-next-line
import { Cart, TipserElement } from '@tipser/tipser-elements';
import logo from '../../assets/images/logo.svg';
import './header.scss';

export default class Header extends React.Component {
  render() {
    const CONTENT_ID = '1CmDHx28vSSzrEuuooTK4N'; //Contentful component: https://app.contentful.com/spaces/i8t5uby4h6ds/entries/1CmDHx28vSSzrEuuooTK4N

    return (
      <header className="site-header">
        {/* <div className="site-header-info-bar">
          <TipserElement id={CONTENT_ID} />
        </div> */}
        <nav className="navigation th-border">
          <ul className="horizontal-menu">
            {/* <li className="horizontal-item">
              <a className="link" href="https://dn.se" rel="noopener noreferrer">
                <img src={logo} className="te-logo" alt="logo" />
              </a>
            </li> */}
            <li className="horizontal-item cart">
              {/* Inserting the Tipser cart Icon */}
              <Cart />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
