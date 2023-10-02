module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    node: true, // Add the 'node' environment
  },
  rules: {
    // Global ESLint rules go here

    // Example: Enforce a maximum line length of 100 characters
    'max-len': ['error', { code: 150 }],

    // Example: Require the use of single quotes for string literals
    quotes: ['error', 'single'],

    // Example: Enforce a consistent indentation of 2 spaces
    indent: ['error', 2],

    // Add more global rules as needed
  },
};
