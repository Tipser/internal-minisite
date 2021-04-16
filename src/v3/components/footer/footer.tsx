import * as React from 'react';
import KlarnaLight from '../icon/klarna-icon.svg';
import MastercardLight from '../icon/mastercard-icon.svg';
import VisaLight from '../icon/visa-icon.svg';

import './footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-contact-us">
          <span className="footer-header">Have a question?</span>
          <div className="footer-links">
            <a href="mailto:support@tipser.com" className="footer-link">
              support@tipser.com
            </a>
          </div>
        </div>
        <div className="footer-columns">
          <div className="footer-security-info footer-column">
            <span className="footer-header">Shop with Tipser</span>
            <div className="footer-security-info-bullets">
              <span>
                <span className="tipser-icon tipser-icon-safe"></span> Secure shopping
              </span>
              <span>
                <span className="tipser-icon tipser-icon-heart"></span> Safe payment with Klarna
              </span>
              <span>
                <span className="tipser-icon tipser-icon-return"></span> 14 days return policy
              </span>
            </div>
          </div>
          <div className="footer-payments footer-column">
            <span className="footer-header">Pay with</span>
            <div className="footer-payments-icons">
              <span className="psp-icon-wrapper">
                <img className="psp-icon" src={KlarnaLight} alt="klarna icon" />
              </span>
              <span className="psp-icon-wrapper">
                <img className="psp-icon" src={VisaLight} alt="Visa icon" />
              </span>
              <span className="psp-icon-wrapper">
                <img className="psp-icon" src={MastercardLight} alt="Mastercard icon" />
              </span>
            </div>
          </div>
          <div className="footer-help footer-column">
            <span className="footer-header">Let us help you</span>
            <span className="footer-link">
              <a href="https://tipser.com/support?pageLang=sv" target="_blank" rel="noopener noreferrer">
                Help
              </a>
            </span>
            <span className="footer-link">
              <a href="https://www.tipser.com/merchants?pageLang=sv" target="_blank" rel="noopener noreferrer">
                Sign up for a merchant account
              </a>
            </span>
          </div>
        </div>
        <div className="footer-terms">
          {/*<div className="footer-logo">*/}
          {/*<a href="/" className="tipser-logo"></a>*/}
          {/*<div className="footer-social-medias">*/}
          {/*<a href="https://twitter.com/wearetipser" target="_blank" className="footer-social-media-icon">*/}
          {/*<span className="tipser-icon tipser-icon-twitter"></span>*/}
          {/*</a>*/}
          {/*<a href="https://www.facebook.com/wearetipser/" target="_blank" className="footer-social-media-icon">*/}
          {/*<span className="tipser-icon tipser-icon-facebook"></span>*/}
          {/*</a>*/}
          {/*<a href="https://www.instagram.com/wearetipser/" target="_blank" className="footer-social-media-icon">*/}
          {/*<span className="tipser-icon tipser-icon-instagram"></span>*/}
          {/*</a>*/}
          {/*</div>*/}
          {/*</div>*/}
          <div className="footer-terms-links">
            <div className="footer-links footer-links-privacy footer-links-inline">
              <a
                href="https://www.tipser.com/terms?pageLang=sv"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Conditions of Use and Sale
              </a>
              <a
                href="https://www.tipser.com/terms-privacy?pageLang=sv"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Privacy notice
              </a>
              <a
                href="https://www.tipser.com/terms-cookies?pageLang=sv"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Cookies &amp; Analytics
              </a>
            </div>
          </div>
          <div className="footer-copyrights">© 2011 - 2020, Tipser AB</div>
        </div>
      </div>
    );
  }
}
