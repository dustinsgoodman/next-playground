import React from 'react';
import Homepage from 'pages/index';
import { render, waitFor } from 'unit-test-utils';

test('renders the correct page title and metadata', async () => {
  const { getByText } = render(<Homepage />);

  expect(getByText('Hello World')).toBeInTheDocument();
  await waitFor(() => expect(document.title).toEqual('Hello there'));
});
