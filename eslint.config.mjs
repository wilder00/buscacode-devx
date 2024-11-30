import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import customEslintRules from './custom/eslint-rules/index.mjs'
import vitest from '@vitest/eslint-plugin'
import parser from '@typescript-eslint/parser'


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {languageOptions: { globals: globals.browser }},
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
      'custom/no-use-process-env': 'error'
    }
  },
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
      'custom/no-use-process-env': 'error'
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
    ignores: ['node_modules/', 'dist/']
  },
]
