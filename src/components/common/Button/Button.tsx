import React, { FC } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  inlineStyle?: React.CSSProperties;
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  inlineStyle
}) => {
  const combinedStyle = {
    ...styles,
    ...inlineStyle
  };

  return (
    <button
      onClick={onClick}
      className={className || styles.button}
      style={combinedStyle}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  inlineStyle: {}
};
