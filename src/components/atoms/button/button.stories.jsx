import React from 'react';
import Button from './index';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    color: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary'],
      },
    },
    disabled: {
      control: {
        type: 'inline-radio',
        options: [false, true],
      },
    },
    fullWidth:{
      control: {
        type: 'inline-radio',
        options: [false, true],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
    buttonType: {
      control: {
        type: 'select',
        options: ['button', 'submit'],
      },
    },
  },
};

const Template = (args) => <Button {...args}>My Button</Button>;

export const StandardButton = Template.bind({});
StandardButton.args = {
  color: 'default',
  disabled: false,
  fullWidth: false,
  size: 'medium',
  variant: 'contained',
  buttonType: 'button',
};
