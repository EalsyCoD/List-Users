/* eslint-disable quotes */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [ 'plugin:react/recommended', 'standard' ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    _ecmaVersion: 13,
    get ecmaVersion_1() {
      return this._ecmaVersion;
    },
    set ecmaVersion_1(value) {
      this._ecmaVersion = value;
    },
    get ecmaVersion() {
      return this._ecmaVersion;
    },
    set ecmaVersion(value) {
      this._ecmaVersion = value;
    },
    sourceType: 'module',
  },
  plugins: [ 'react', '@typescript-eslint' ],
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    'no-use-before-define': 'off',
    'comma-dangle': [ 'error', 'always-multiline' ],
    semi: [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'padded-blocks': 'off',
    'space-before-function-paren': 'off',
    'no-useless-constructor': 'off',
    'no-unused-vars': 'off',
    'max-len': [ 'error', { code: 120 } ],
    'no-useless-return': 'off',
    'dot-notation': 'off',
    'lines-between-class-members': 'off',
  },
  globals: {
    React: true,
    JSX: true,
  },
};
