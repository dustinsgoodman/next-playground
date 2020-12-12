import React from 'react';
import App, { AppWrapper } from 'pages/_app';
import { render, waitFor } from 'unit-test-utils';

const TestPage = () => (
  <AppWrapper>
    <p data-testid="dummy-paragraph">Dummy page for testing</p>
  </AppWrapper>
);

test('sets default page title', async () => {
  render(<TestPage />);
  await waitFor(() => expect(document.title).toEqual('Next Playground'));
});

test('renders the app', () => {
  const subject = <App Component={TestPage} pageProps={{}} />;
  const { getByTestId } = render(subject);
  expect(getByTestId('dummy-paragraph')).toBeInTheDocument();
});
