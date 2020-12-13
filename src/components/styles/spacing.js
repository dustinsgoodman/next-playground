const BASE_SPACING_PIXELS = 16;

const pixelToRem = (sizeInPixels) => {
  const size =
    typeof sizeInPixels === 'string'
      ? parseInt(sizeInPixels, 10)
      : sizeInPixels;

  return `${size / BASE_SPACING_PIXELS}rem`;
};

const proportionalSpacing = (proportion) =>
  pixelToRem(BASE_SPACING_PIXELS * proportion);

const BASE_SPACING = proportionalSpacing(1);
const DOUBLE_BASE_SPACING = proportionalSpacing(2);
const HALF_BASE_SPACING = proportionalSpacing(0.5);

export { BASE_SPACING, DOUBLE_BASE_SPACING, HALF_BASE_SPACING, pixelToRem };
