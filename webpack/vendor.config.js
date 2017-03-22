const webpack = require('webpack');
const vendors = require('./vendors.json');

module.exports = {
  devtool: 'source-map',
  // vendors is array of libraries used
  entry:  {
    vendors: vendors
  },
  module: {
    rules: [
      {
        // some libraries are using json files, but webpack does NOT support json out of the box
        test: /\.json$/,
        use: 'json-loader'
      }
      // this config is for libraries - no need to add babel or other loaders
    ]
  },
  output: {
    // real app MUST have [hash] in filename
    filename: 'vendors.js',
    path: '.build/vendor/',
    // name of global variable under which is bundle stored
    // in this case window.vendor
    library: 'vendor'
  },
  plugins: [
    new webpack.DllPlugin({
      // name of global variable which should other bundles use to get referenced module
      // should be same as output.library
      name: 'vendor',
      path: '.build/vendor/vendor-manifest.json'
    })
  ]
};