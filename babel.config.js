const moduleResolver = [
  'module-resolver',
  {
    root: ['./'],
    alias: {
      components: './src/components',
      gql: './src/gql',
      helpers: './src/helpers',
      pages: './pages',
      shared: './src/shared',
      'unit-test-utils': './test/unit/unit-test-utils',
    },
  },
];

module.exports = {
  env: {
    test: {
      plugins: ['babel-plugin-require-context-hook', 'polished'],
    },
  },
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/transform-runtime',
    moduleResolver,
  ],
  presets: ['@babel/preset-env', '@babel/preset-react'],
};
