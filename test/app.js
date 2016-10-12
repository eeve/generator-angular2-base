'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator:app', function () {
  this.timeout(30000);
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withArguments(['mocha test'])
      .withPrompts({
        name: 'test',
        description: 'just a test',
        useLess: true,
        useSass: true,
        author: 'eeve',
        email: 'eeveme@gmail.com',
        license: 'MIT',
        autoInstall: true
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'README.md',
      '.editorconfig',
      '.gitignore',
      'tsconfig.json',
      'typings.json',
      'config/helpers.js',
      'config/webpack.common.js',
      'config/webpack.dev.js',
      'config/webpack.prod.js',
      'app/index.html',
      'app/app.css',
      'package.json',
      'webpack.config.js'
    ]);
  });
});
