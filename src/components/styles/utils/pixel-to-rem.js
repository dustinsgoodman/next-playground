const pixelToRem = (sizeInPixels) => {
  const size =
    typeof value === 'string' ? parseInt(sizeInPixels, 10) : sizeInPixels;

  return `${size / 16}rem`;
};

export default pixelToRem;
