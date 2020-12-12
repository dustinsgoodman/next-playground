import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

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

const App = ({ Component, pageProps }) => (
  <AppWrapper>
    <Component {...pageProps} />
  </AppWrapper>
);

export default App;
