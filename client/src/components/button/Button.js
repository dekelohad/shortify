import React from 'react';
import './Button.css';

const button = ({
  text,
  onClick,
  disabled = false,
  className = '',
  ...rest
}) => {
  const disabledClassName = disabled ? 'btn--disabled' : '';

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn ${disabledClassName} ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default button;
