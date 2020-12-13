import React from 'react';
import { Helmet } from 'react-helmet';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';

import useApollo from 'shared/apollo';
import GlobalStyle from 'shared/global-style';
import { darkTheme } from 'components/styles/theme';

const defaultTitle = 'Next Playground';

export const AppWrapper = ({ children }) => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={defaultTitle}
      link={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
      ]}
      meta={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        { property: 'og:title', content: defaultTitle },
        {
          name: 'description',
          content: 'A place to experiment with Next.js features.',
        },
      ]}
    />
    {children}
  </ThemeProvider>
);

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ApolloProvider>
  );
};

export default App;
