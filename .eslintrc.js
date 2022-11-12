module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: false }
    ],
    'comma-dangle': ['error', 'never'],
    'prettier/prettier': [
      1,
      {
        singleQuote: true,
        semi: true,
        endOfLine: 'auto'
      }
    ]
  }
};
