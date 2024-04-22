import React from 'react';
import './Button.styles.css';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  backgroundColor,
  size = 'medium',
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const sizeClass = `storybook-button--${size}`;
  return (
    <button
      type="button"
      className={`storybook-button ${mode} ${sizeClass}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;

