module.exports = {
  presets: [
    '@babel/preset-env',
    {
      useBuiltIns: 'entry'
    },
    '@vue/app',
    {
      polyfills: ['es6.promise', 'es6.symbol']
    }
  ]
}
