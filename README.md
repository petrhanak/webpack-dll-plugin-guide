# Webpack DllPlugin

## What is it and why should i care

TL;DR: split build, faster rebuild

> Webpack's Dll and DllReference plugins are a way to split a large JavaScript project into multiple bundles which can be compiled independently. They can be used to optimize build times (both full and incremental) and improve caching for users by putting code which changes infrequently into separate "library" bundles. The term 'Dll' is short for Dynamically Linked Library which is a feature for native Windows applications that solves the same problem.
>
> more info: https://robertknight.github.io/posts/webpack-dll-plugins/     

## How to do it

### Vendor config
Desired config `entry` should look like this:

`~/webpack/vendor.config.json`
```javascript
module.exports = {
  entry: [
    "lodash",
    "moment",
    "react",
    "react-dom"
  ]
  //...
}
```

To keep things clean create separate file which exports array of vendor libraries - either `js` or `json`.

`~/webpack/vendors.json`
```json
[
  "lodash",
  "moment",
  "react",
  "react-dom"
]
```

And copy-paste [vendor config](webpack/vendor.config.js)

### Client config

Just add following plugin into webpack 

```javascript
new webpack.DllReferencePlugin({
  context: '.',
  manifest: require('../.build/vendor/vendor-manifest.json'),
})
```

### Automatic build 
add build command in `package.json`
```
webpack --config webpack/vendor.config.js
```

