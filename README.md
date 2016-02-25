webpack-output-babel
====================

A [Webpack][] plugin to apply Babel transforms to output chunks.

[webpack]: https://webpack.github.io/

Usage
-----

In `webpack.config.js`:

```javascript
const OutputBabelPlugin = require('webpack-plugin-output-babel');

const babelOptions = {
    plugins: ['transform-remove-console', 'transform-minify-booleans'],
    compact: true
};

module.exports = {
    ...
    plugins: [
        new OutputBabelPlugin(babelOptions)
    ]
};
```

All plugin options are passed to Babel &ndash; use the same keys as in
`.babelrc`.

Installation
------------

```bash
npm install webpack-plugin-output-babel
```

Caveats
-------

No attempt is currently made to preserve source maps.
