module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['simple-import-sort', 'react-hooks'],
  rules: {
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'simple-import-sort/sort': 'error',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
  ],
}
