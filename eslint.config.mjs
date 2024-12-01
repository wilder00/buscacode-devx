import pluginJs from '@eslint/js'
import parser from '@typescript-eslint/parser'
import vitest from '@vitest/eslint-plugin'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import customEslintRules from './custom/eslint-rules/index.mjs'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      custom: customEslintRules
    },
    rules: {
      indent: ['error', 2, { SwitchCase: 1 }],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      camelase: 'off',
      'space-before-function-paren': ['error', { named: 'never' }],
      'no-debugger': 'error',
      eqeqeq: ['error', 'always'],
      'custom/no-use-process-env': 'error',
      'react/react-in-jsx-scope': 'off'
    }
  },
  {
    files: [
      '__tests__/**/*.[jt]s',
      '**/__tests__/**/*.[jt]s',
      '**/?(*.)+(spec|test).[jt]s/**'
    ], // or any other pattern
    plugins: {
      vitest
    },
    rules: {
      ...vitest.configs.recommended.rules
    },
    settings: {
      vitest: {
        typecheck: true
      }
    },
    languageOptions: {
      parser: parser,
      globals: {
        ...vitest.environments.env.globals,
        ...globals.node
      }
    }
  },
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    ignores: ['node_modules', 'dist', '.docusaurus']
  }
]
