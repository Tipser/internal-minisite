import * as React from 'react';
import classNames from 'classnames';
import './drawer.scss';
import Icon from '../icon/icon';
import { Portal } from 'react-portal';

interface DrawerProps {
  header?: string;
  children?: any;
  visible?: boolean;
  placeholder?: any;
  onClose?: () => void;
  responsive?: boolean;
  zIndex?: number;
  inline?: boolean;
  slideDirection?: 'top' | 'right' | 'left';
  overlay?: boolean;
  disableCloseIcon?: boolean;
  className?: string;
}

function shouldNonInlineDrawerBeVisible(props: DrawerProps): boolean {
  return !!props.visible && !props.inline; // Jonas: !! evaluates for undefined or null
}

function disableBodyScroll(): void {
  document.body.classList.add('noscroll');
}

function enableBodyScroll(): void {
  document.body.classList.remove('noscroll');
}

export default class Drawer extends React.Component<DrawerProps, {}> {
  componentDidMount() {
    if (shouldNonInlineDrawerBeVisible(this.props)) {
      disableBodyScroll();
    }
  }

  componentDidUpdate(prevProps: DrawerProps) {
    // if drawer visibility has changed
    if (shouldNonInlineDrawerBeVisible(prevProps) !== shouldNonInlineDrawerBeVisible(this.props)) {
      if (shouldNonInlineDrawerBeVisible(this.props)) {
        disableBodyScroll();
      } else {
        enableBodyScroll();
      }
    }
  }

  componentWillUnmount() {
    if (!shouldNonInlineDrawerBeVisible(this.props)) {
      enableBodyScroll();
    }
  }

  render() {
    const wrap = (component) =>
      !this.props.inline ? <Portal>{component}</Portal> : <React.Fragment>{component}</React.Fragment>;

    // tslint:disable-next-line: jsx-alignment
    return wrap(
      <div
        className={classNames('drawer-container', {
          offscreen: !this.props.visible,
          inline: this.props.inline,
          'transparent-overlay': this.props.overlay === false,
          'no-close': this.props.disableCloseIcon,
          [`slide-from-${this.props.slideDirection}`]: this.props.slideDirection,
          [this.props.className as string]: this.props.className,
        })}
        style={{ zIndex: this.props.zIndex }}
      >
        <div className="overlay" onClick={this.props.onClose || (() => {})} />
        <div
          className={classNames('drawer', {
            'drawer-responsive': this.props.responsive,
          })}
          style={{ zIndex: this.props.zIndex }}
        >
          <div
            className={classNames('header', {
              'no-title': !this.props.header,
            })}
            onClick={this.props.onClose || (() => {})}
          >
            <span className="title">{this.props.header}</span>
            {!this.props.disableCloseIcon && (
              <span onClick={this.props.onClose || (() => {})} className="close">
                <Icon name="cross" />
              </span>
            )}
          </div>
          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
