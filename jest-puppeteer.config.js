module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
    ignoreHTTPSErrors: true,
    args: ['--no-sandbox ', '--disable-setuid-sandbox'],
    slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
    devtools: true,
  },
  server: {
    command: `yarn start`,
    launchTimeout: 20000,
    debug: process.env.DEBUG === 'true',
    port: 3000,
  },
};
