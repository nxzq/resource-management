module.exports = {
  parser: 'babel-eslint',
  env: {
      commonjs: true,
      es6: true,
      node: true,
      jest: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
      sourceType: 'module',
  },
  rules: {
      indent: ['error', 2, {SwitchCase: 1}],
      'linebreak-style': ['error', require('os').EOL == '\r\n' ? 'windows' : 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'], 
      // 'no-console': ['warn', {allow: ['clear', 'info', 'error', 'dir', 'trace']}],
  },
};