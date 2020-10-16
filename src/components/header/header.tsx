import * as React from 'react';
import { Cart } from '@tipser/tipser-elements/dist/all';
import logo from '../../assets/images/logo.svg';
import './header.scss';

interface Props {
  onLangChange: (lang: string) => void;
}
export default class Header extends React.Component<Props> {
  state = {
    param: null,
  };
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const myparam = urlParams.get('lang');
    myparam &&
      this.setState({
        param: `?lang=${myparam}`,
      });
  }

  langOptions = [
    { label: 'US', value: 'en-US' },
    { label: 'GB', value: 'en-GB' },
    { label: 'SV', value: 'sv-SE' },
    { label: 'DE', value: 'de-DE' },
    { label: 'FI', value: 'fi-FI' },
    { label: 'FR', value: 'fr-FR' },
  ];

  onDropdownChange = (e) => {
    this.props.onLangChange(e.target.value);
  };

  render() {
    return (
      <header className="site-header">
        <nav className="navigation th-border">
          <ul className="horizontal-menu">
            <li className="horizontal-item">
              <a className="link" href={`${this.state.param ? this.state.param : '/'}`} rel="noopener noreferrer">
                <img src={logo} className="te-logo" alt="logo" />
              </a>
            </li>
            <li className="horizontal-item"></li>
            <li className="horizontal-item">
              <select
                className="horizontal-item-select"
                defaultValue="select-option"
                onChange={(e) => {
                  this.onDropdownChange(e);
                }}
              >
                <option value="select-option" disabled>
                  Language
                </option>
                {this.langOptions.map((opt, index) => (
                  <option key={index} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <a href={`/checkout/${this.state.param ? this.state.param : ''}`} className="horizontal-menu-link">
                Go to checkout
              </a>
              <a
                href={`checkout-multipage/step-1/${this.state.param ? this.state.param : ''}`}
                className="horizontal-menu-link"
              >
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
