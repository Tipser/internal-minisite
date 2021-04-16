import React from 'react';
import classNames from 'classnames';
import './icon.scss';

export type IconName =
  | 'user'
  | 'recycle'
  | 'check-circle'
  | 'earn'
  | 'growth'
  | 'img-tag'
  | 'infinity'
  | 'money'
  | 'preview'
  | 'product'
  | 'automate'
  | 'data'
  | 'remove'
  | 'add'
  | 'lock'
  | 'return'
  | 'trash'
  | 'move'
  | 'globe'
  | 'calendar'
  | 'mobile'
  | 'hamburger'
  | 'list'
  | 'line'
  | 'check'
  | 'check-thin'
  | 'card'
  | 'download'
  | 'marker'
  | 'ship-return'
  | 'ship'
  | 'settings'
  | 'plus'
  | 'upload'
  | 'plus-large'
  | 'pos'
  | 'forbidden'
  | 'tag'
  | 'comment'
  | 'information'
  | 'safe'
  | 'error'
  | 'checkbox'
  | 'edit'
  | 'pen'
  | 'pin'
  | 'envelope'
  | 'breadcrumbs'
  | 'collections'
  | 'home'
  | 'visible'
  | 'hidden'
  | 'twitter'
  | 'facebook'
  | 'instagram'
  | 'pinterest'
  | 'youtube'
  | 'box'
  | 'toggle'
  | 'heart'
  | 'cart'
  | 'cross'
  | 'search'
  | 'small-arrow-down'
  | 'small-arrow-right'
  | 'small-arrow-up'
  | 'small-arrow-left'
  | 'arrow-up'
  | 'arrow-left'
  | 'arrow-down'
  | 'arrow-right'
  | 'hold'
  | 'zoom-in'
  | 'zoom-out';

export type IconSize = 'normal' | 'small' | 'medium' | 'large' | 'x2' | 'x4';

export type IconStyle = 'normal' | 'bold';

interface IconProps {
  name: IconName;
  size?: IconSize;
  style?: IconStyle;
  children?: React.ReactChildren;
  link?: boolean;
  disabled?: boolean;
  className?: any;
  onClick?: (event?) => any;
  onMouseDown?: (event?) => any;
  primary?: boolean;
}

const Icon = (props: IconProps) => (
  <span
    onClick={props.onClick || (() => {})}
    onMouseDown={props.onMouseDown || (() => {})}
    className={classNames('tipser-icon', `tipser-icon-${props.name}`, {
      'tipser-icon_nolink': props.link === false,
      'tipser-icon_disabled': props.disabled === true,
      'tipser-icon_primary primary-text': props.primary === true,
      [`tipser-icon-${props.style}`]: props.style && props.style !== 'normal',
      [`tipser-icon-${props.size}`]: props.size && props.size !== 'normal',
      [`${props.className}`]: props.className,
    })}
  >
    {props.children && <div className="tipser-icon_label">{props.children}</div>}
  </span>
);

export default Icon;
