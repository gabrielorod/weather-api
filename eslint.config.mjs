import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier'; // Substituindo require pelo import

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['node_modules/**', 'dist/**'], // Substitui .eslintignore
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      eqeqeq: 'error',
    },
  },
];
