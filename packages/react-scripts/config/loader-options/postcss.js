var options = [
  require('postcss-import'),
  require('postcss-simple-vars'),
  require('postcss-calc'),
  require('autoprefixer')({
    browsers: [
      '>1%',
      'last 4 versions',
      'Firefox ESR',
      'not ie < 9', // React doesn't support IE8 anyway
    ]
  }),
];

module.exports = options;
