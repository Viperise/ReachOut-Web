import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier'; // Import Prettier plugin
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: parser,
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      react: pluginReact,
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',
    },
  },
];
