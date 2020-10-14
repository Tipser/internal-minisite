import * as React from 'react';
import { Cart } from '@tipser/tipser-elements/dist/all';
import logo from '../../assets/images/logo.svg';
import './header.scss';

interface Props {
  onLangChange:(lang:string)=>void;
}

export default class Header extends React.Component<Props> {
  

  render() {
    const{onLangChange}=this.props
    return (
      <header className="site-header">
        <nav className="navigation th-border">
          <ul className="horizontal-menu">
          <li className="horizontal-item">
              <button onClick={()=>onLangChange('sv-SE')}>change to SV</button>
              <button onClick={()=>onLangChange('fr-FR')}>change to FR</button>
            </li>
            <li className="horizontal-item">
              <a className="link" href="/" rel="noopener noreferrer">
                <img src={logo} className="te-logo" alt="logo" />
              </a>
            </li>
            <li className="horizontal-item">
              <a href="/checkout" className="horizontal-menu-link">
                Go to checkout
              </a>
              <a href="checkout-multipage/step-1" className="horizontal-menu-link">
                Go to multistep checkout
              </a>
            </li>
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
