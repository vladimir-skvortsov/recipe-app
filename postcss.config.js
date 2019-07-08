module.exports = {
  ident: 'postcss',
  plugins: {
    'autoprefixer': {},
    'cssnano': { preset: 'advanced' },
  },
  minimize: true,
}