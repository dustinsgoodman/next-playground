import { lightTheme, darkTheme } from './theme';

test('defines a lightTheme', () => {
  expect(lightTheme).toEqual({
    spacing: {
      BASE_SPACING: '1rem',
      DOUBLE_BASE_SPACING: '2rem',
    },
  });
});

test('defines a darkTheme', () => {
  expect(darkTheme).toEqual({
    spacing: {
      BASE_SPACING: '1rem',
      DOUBLE_BASE_SPACING: '2rem',
    },
  });
});
