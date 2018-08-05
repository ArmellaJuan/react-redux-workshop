import React from 'react';
import classNames from 'classnames';
import './Button.css';

const Button = ({disabled, big, children, onClick}) => (
  <button className={classNames({disabled, big})} onClick={() => !disabled && onClick()}>
    {children}
  </button>
);

export default Button;
