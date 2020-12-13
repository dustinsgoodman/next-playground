import React from 'react';
import { render, fireEvent } from 'unit-test-utils';
import Button from '.';

test('button handles clicks', () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick}>Test Button</Button>);

  fireEvent.click(getByText('Test Button'));
  expect(onClick).toHaveBeenCalled();
});
