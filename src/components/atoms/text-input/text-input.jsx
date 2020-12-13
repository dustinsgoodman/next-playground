import React from 'react';
import StyledInput from './text-input.styles';

const TextInput = React.forwardRef(
  (
    {
      id,
      name,
      onChange,
      label,
      autoComplete = 'true',
      autoFocus = false,
      defaultValue = null,
      disabled = false,
      fullWidth = false,
      placeholder = '',
      required = false,
      type = 'text',
      variant = 'standard',
    },
    ref,
  ) => (
    <StyledInput
      id={id}
      name={name}
      onChange={onChange}
      label={label}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      disabled={disabled}
      fullWidth={fullWidth}
      placeholder={placeholder}
      required={required}
      type={type}
      variant={variant}
      inputRef={ref}
      data-testid={`${id}-text-input`}
    />
  )
);

export default TextInput;
