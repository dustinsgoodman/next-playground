/* eslint-disable jest/no-hooks */
require('expect-puppeteer');

jest.setTimeout(30000);

beforeEach(async () => {
  await jestPuppeteer.resetPage();
  await jestPuppeteer.resetBrowser();
});
