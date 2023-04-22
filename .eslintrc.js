module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@hocs', './src/hocs'],
          ['@contexts', './src/contexts'],
          ['@utils', './src/utils'],
          ['@hooks', './src/hooks'],
          ['@components', './src/components']
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
};
