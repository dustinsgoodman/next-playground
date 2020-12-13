import React from 'react';
import { render } from 'unit-test-utils';
import TextInput from '.';

test('render usable input text field', () => {
  const { getByTestId } = render(<TextInput id="test-id" />);
  expect(getByTestId('test-id-text-input')).toBeInTheDocument();
});
