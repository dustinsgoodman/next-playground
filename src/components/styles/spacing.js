import { pixelToRem } from './utils';

const BASE_SPACING_PIXELS = 16;
const proportionalSpacing = (proportion) =>
  pixelToRem(BASE_SPACING_PIXELS * proportion);

const BASE_SPACING = proportionalSpacing(1);
const DOUBLE_BASE_SPACING = proportionalSpacing(2);

export default {
  BASE_SPACING,
  DOUBLE_BASE_SPACING,
};
