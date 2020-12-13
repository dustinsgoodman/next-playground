import React from 'react';
import StyledButton from './button.styles';

const Button = ({
  children,
  onClick,
  color = 'default',
  disabled = false,
  fullWidth = false,
  size = 'medium',
  variant = 'contained',
  buttonType = 'button',
}) => (
  <StyledButton
    color={color}
    disabled={disabled}
    fullWidth={fullWidth}
    size={size}
    variant={variant}
    onClick={onClick}
    type={buttonType}
  >
    {children}
  </StyledButton>
);

export default Button;
