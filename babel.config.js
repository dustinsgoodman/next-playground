const moduleResolver = [
  'module-resolver',
  {
    root: ['./'],
    alias: {},
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
