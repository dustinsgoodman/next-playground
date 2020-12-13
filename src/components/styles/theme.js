import { darken } from 'polished';
import { BASE_SPACING, DOUBLE_BASE_SPACING } from './spacing';
import ColorPallete from './colors';

export const lightTheme = {
  spacing: {
    BASE_SPACING,
    DOUBLE_BASE_SPACING,
  },
};

export const darkTheme = {
  spacing: {
    BASE_SPACING,
    DOUBLE_BASE_SPACING,
  },
  palette: {
    background: {
      primary: ColorPallete.black,
      secondary: ColorPallete.darkGray,
    },
    text: {
      primary: ColorPallete.white,
      link: ColorPallete.blue,
    },
    input: {
      text: ColorPallete.blueGray,
    },
    info: {
      background: ColorPallete.gray,
      text: ColorPallete.white,
      active: darken('0.1', ColorPallete.gray),
    },
  },
};
