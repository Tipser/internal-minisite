import * as React from 'react';
// eslint-disable-next-line
import { Cart, TipserElement } from '@tipser/tipser-elements/dist/all';
import logo from '../../assets/images/logo.svg';
import './header.scss';

export default class Header extends React.Component {
  render() {

    return (
      <header className="site-header">
        {/* <div className="site-header-info-bar">
          <TipserElement id={CONTENT_ID} />
        </div> */}
        <nav className="navigation th-border">
          <ul className="horizontal-menu">
            <li className="horizontal-item">
              <a className="link" href="/" rel="noopener noreferrer">
                <img src={logo} className="te-logo" alt="logo" />
              </a>
            </li>
            <li className="horizontal-item">
              <a href="/checkout" className="horizontal-menu-link">Go to checkout</a>
            </li>
            {/*<li className="horizontal-item cart">/*/}
              {/* Inserting the Tipser cart Icon */}
              {/*<Cart />*/}
            {/*</li>*/}
          </ul>
          <span className="horizontal-item cart">
            {/* Inserting the Tipser cart Icon */}
            <Cart />
          </span>
        </nav>
      </header>
    );
  }
}
