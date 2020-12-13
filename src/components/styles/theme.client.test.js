import { lightTheme, darkTheme } from './theme';

test('defines a lightTheme', () => {
  expect(lightTheme).toEqual(
    expect.objectContaining({
      spacing: {
        BASE_SPACING: '1rem',
        DOUBLE_BASE_SPACING: '2rem',
      },
    }),
  );
});

test('defines a darkTheme', () => {
  expect(darkTheme).toEqual(
    expect.objectContaining({
      spacing: {
        BASE_SPACING: '1rem',
        DOUBLE_BASE_SPACING: '2rem',
      },
    }),
  );
});
