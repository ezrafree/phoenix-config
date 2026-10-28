/**
 * ESLint Config
 */

const fs = require('fs')
const path = require('path')
const js = require('@eslint/js')
const prettier = require('eslint-config-prettier')
const prettierPlugin = require('eslint-plugin-prettier')

// Phoenix's API, plus the lodash build it bundles
const phoenixGlobals = {
  _: 'readonly',
  App: 'readonly',
  Event: 'readonly',
  Image: 'readonly',
  Key: 'readonly',
  Modal: 'readonly',
  Mouse: 'readonly',
  Phoenix: 'readonly',
  Screen: 'readonly',
  Space: 'readonly',
  Storage: 'readonly',
  Task: 'readonly',
  Timer: 'readonly',
  Window: 'readonly',
  require: 'readonly',
}

// Phoenix runs every required file in one shared global scope, so a top-level
// declaration in one file is visible to all the others
function collectSharedGlobals(directories) {
  const declaration = /^(?:function|var|const|let) (\w+)|\bthis\.(\w+) =/gm
  const globals = {}

  for (const directory of directories) {
    const directoryPath = path.join(__dirname, directory)
    for (const file of fs.readdirSync(directoryPath)) {
      if (!file.endsWith('.js')) continue
      const source = fs.readFileSync(path.join(directoryPath, file), 'utf8')
      for (const match of source.matchAll(declaration)) {
        globals[match[1] || match[2]] = 'writable'
      }
    }
  }

  return globals
}

module.exports = [
  js.configs.recommended,
  prettier,
  {
    files: ['**/*.js'],
    plugins: { prettier: prettierPlugin },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        ...phoenixGlobals,
        ...collectSharedGlobals(['config', 'modules']),
      },
    },
    rules: {
      'no-unused-vars': ['error', { vars: 'local' }],
      // a file's own top-level declarations are also in the shared globals
      'no-redeclare': ['error', { builtinGlobals: false }],
      curly: ['error', 'multi-line'],
      eqeqeq: ['error', 'always'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'object-shorthand': ['error', 'always'],
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['eslint.config.js', '.prettierrc.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: { __dirname: 'readonly' },
    },
  },
]
