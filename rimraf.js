const globby = require('globby');
const rimraf = require('rimraf');

globby(['src/dist/*'])
  .then(function then(paths) {
    paths.map(function map(item) {
      rimraf.sync(item);
    });
  });
