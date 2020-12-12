module.exports = {
  displayName: 'Browser',
  globalSetup: 'jest-environment-puppeteer/setup',
  globalTeardown: 'jest-environment-puppeteer/teardown',
  setupFilesAfterEnv: ['<rootDir>/test/browser/browser-test-setup.js'],
  testEnvironment: 'jest-environment-puppeteer',
  testMatch: ['<rootDir>/**/*.browser.test.js'],
  transformIgnorePatterns: ['node_modules'],
};
