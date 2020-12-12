import { BASE_SPACING, DOUBLE_BASE_SPACING, pixelToRem } from './spacing';

test('exports BASE_SPACING as 1rem', () => {
  expect(BASE_SPACING).toEqual('1rem');
});

test('exports DOUBLE_BASE_SPACING as 2rem', () => {
  expect(DOUBLE_BASE_SPACING).toEqual('2rem');
});

test('pixelToRem converts numeric string of pixels to rem', () => {
  const subject = pixelToRem('32');
  expect(subject).toEqual('2rem');
});

test('pixelToRem converts number of pixels to rem', () => {
  const subject = pixelToRem(24);
  expect(subject).toEqual('1.5rem');
});
