module.exports = {
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
    ],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    rules: {
      'indent': ['error', 2],
      'semi': ['error', 'always'],
      quotes: ['error', 'single'],
    }
  }