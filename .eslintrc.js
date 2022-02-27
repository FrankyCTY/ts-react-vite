module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'react', 'react-hooks', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/explicit-function-return-type': 2,
    'no-param-reassign': 0,
    'no-unused-vars': 2,
    'no-shadow': 0,
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/no-cycle': 1,
    'react-hooks/exhaustive-deps': 2,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '**/node_modules/', 'src'],
      },
      alias: {
        map: [
          ['src', './src'],
          ['@', './test'],
        ],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 12,
    requireConfigFile: false,
    sourceType: 'module',
  },
}
