import React from 'react';
import { ThemeProvider } from 'styled-components';
import { addDecorator, addParameters } from '@storybook/react';
import {
  INITIAL_VIEWPORTS,
} from '@storybook/addon-viewport';

import GlobalStyle from 'shared/global-style';
import { darkTheme } from 'components/styles/theme';


addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
});

addDecorator(Story => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
));

export const parameters = {};
