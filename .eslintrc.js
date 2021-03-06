module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
    'plugin:jest/recommended',
    'plugin:import/errors',
  ],
  globals: {},
  ignorePatterns: ['**/node_modules/*'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    'jest',
    'module-resolver',
    'import',
    'unicorn',
    'fp',
  ],
  rules: {
    'fp/no-arguments': 'error',
    'fp/no-class': 'error',
    'fp/no-get-set': 'error',
    'fp/no-mutating-assign': 'error',
    'fp/no-this': 'error',
    'fp/no-valueof-field': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.*',
          '**/*test-setup.js',
          'infrastructure/**',
        ],
      },
    ],
    'jest/consistent-test-it': ['error', { fn: 'test' }],
    'jest/lowercase-name': 'error',
    'jest/no-alias-methods': 'error',
    'jest/no-hooks': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'module-resolver/use-alias': 'error',
    'prettier/prettier': 'error',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-filename-extension': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'unicorn/filename-case': ['error', { case: 'kebabCase' }],
    'jsx-a11y/anchor-is-valid': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.stories.jsx'],
      rules: {
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'test/unit', 'src', '.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
