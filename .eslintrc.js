// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier', '@rocketseat/eslint-config/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    camelcase: 'off',
  },
}
