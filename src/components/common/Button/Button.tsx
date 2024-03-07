import React, { FC } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  inlineStyle?: React.CSSProperties;
  type?: 'button' | 'reset' | 'submit' | undefined;
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  inlineStyle,
  type,
  disabled
}) => {
  const combinedStyle = {
    ...styles,
    ...inlineStyle
  };
  const buttonClasses = `${styles.button} ${className || ''} ${disabled ? styles.disabled : ''}`;

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      style={combinedStyle}
      disabled={disabled}
      type={type || 'button'}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  inlineStyle: {}
};
