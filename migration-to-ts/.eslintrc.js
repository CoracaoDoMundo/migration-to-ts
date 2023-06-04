module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  //   extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  //   plugins: ['@typescript-eslint'],
  plugins: ['prettier'],
  rules: {
    'import/extensions': 'off',
    'prettier/prettier': 'error',
  },
};
