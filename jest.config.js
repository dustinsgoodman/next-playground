const path = require('path');

const collectCoverageFrom = [
  '**/*.{js,jsx}',
  '!**/*.stories.jsx',
  '!**/*.config.js',
  '!**/*.test.{js,jsx}',
  '!./src/page/test/**',
  '!./test/**',
  '!./src/pages/test/**',
  '!.eslintrc.js',
  '!./.storybook/**',
];

const common = {
  clearMocks: true,
  verbose: false,
  watchPathIgnorePatterns: ['/node_modules/', '/docs/', '/dist/', '/.vscode/'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  roots: ['./'],
  coverageProvider: 'v8',
  coverageReporters: ['html', 'text', 'json', 'xml'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/.vscode/',
    '/storybook-static/',
    '/.next/',
    '/.git/',
    '/coverage/',
  ],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'mjs'],
};

module.exports = {
  collectCoverageFrom,
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      lines: 100,
      functions: 100,
    },
  },
  globalSetup: './test/unit/global-setup.js',
  projects: [
    {
      ...common,
      displayName: 'Unit: Server',
      testRegex: '\\.server\\.test\\.jsx?$',
      setupFilesAfterEnv: [
        'jest-extended',
        path.resolve(__dirname, 'test', 'unit', 'test-setup.js'),
      ],
      testEnvironment: 'node',
    },
    {
      ...common,
      displayName: 'Unit: Client',
      testRegex: '\\.client\\.test\\.jsx?$',
      setupFilesAfterEnv: [
        'jest-extended',
        '@testing-library/jest-dom/extend-expect',
        path.resolve(__dirname, 'test', 'unit', 'test-setup.js'),
      ],
      testEnvironment: 'jsdom',
    },
  ],
};
