const webpack = require('webpack');
const vendorManifest = require('../.build/vendor/vendor-manifest.json');

module.exports = {
  entry: [
    './src'
  ],
  output: {
    filename: 'app.js',
    path: '.build/client/'
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: vendorManifest
    })
  ]
};