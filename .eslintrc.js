module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@babel/eslint-parser'
  },
  plugins: ['react', 'prettier'],
  root: true,
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single']
  }
};
