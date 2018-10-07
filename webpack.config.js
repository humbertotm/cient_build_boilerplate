const path = require('path');

module.export = {
  entry: {
    main: 'src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'static')
  },
  module: {
    rules: []
  }
}

/*
* Add loaders for jsx, js. Transpile with babel, es2015 preset.
* Add loader for sass. Will inject css through a link tag in the index.html template.
* Add copy files plugin to copy fonts, and assets into build dir.
* Add hot module replacement plug in for hot module reloading.
*/