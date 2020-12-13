import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
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
  <StylesProvider>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  </StylesProvider>
));

export const parameters = {};
