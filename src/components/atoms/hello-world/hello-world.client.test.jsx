import React from 'react';
import { render } from 'unit-test-utils';

import HelloWorld from './hello-world';

test('renders the correct page title and metadata', async () => {
  const { getByText } = render(<HelloWorld />);

  expect(getByText('Hello World')).toBeInTheDocument();
});
