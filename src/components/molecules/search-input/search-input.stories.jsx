import React from 'react';
import SearchInput from './index';

export default {
  title: 'Molecules/SearchInput',
  component: SearchInput,
  argTypes: {
    onClick: { action: 'clicked' },
    autoComplete: {
      control: {
        type: 'text',
      },
    },
    autoFocus: {
      control: {
        type: 'inline-radio',
        options: [false, true],
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
    placeholder: {
      control: {
        type: 'text',
      },
    },
    required:{
      control: {
        type: 'inline-radio',
        options: [false, true],
      },
    },
    type: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['standard', 'filled', 'outlined'],
      },
    },
  },
};

const Template = (args) => <SearchInput {...args} />;

export const SimpleTextInput = Template.bind({});
SimpleTextInput.args = {
  id: 'test-input',
  name: 'test',
  label: 'Test Input Field',
  autoFocus: true,
  defaultValue: '',
  dsiabled: false,
  fullWidth: false,
  placeholder: 'Placeholder text',
  required: false,
  type: 'text',
  variant: 'standard',
};
