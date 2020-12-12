/* eslint-disable jest/no-hooks,no-console, import/no-extraneous-dependencies */

import { cleanup } from '@testing-library/react';

require('babel-plugin-require-context-hook/register')();

beforeEach(() => {});

afterEach(() => {
  if (typeof window !== 'undefined') {
    cleanup(); // eslint-disable-line global-require
  }
});

afterAll(() => {});
