module.exports = {
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: '.*rc',
      options: { parser: 'json' },
    },
  ],
}
