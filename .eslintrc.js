module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: ['plugin:vue/recommended', '@vue/prettier', '@vue/standard', 'prettier', 'prettier/standard'],
  plugins: ['import', 'prettier', 'standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/component-name-in-template-casing': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
