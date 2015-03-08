#!/usr/bin/env node
'use strict';
var meow = require('meow');
var version = require('./');

var cli = meow({
  help: [
    'Requirements',
    '  - Cordova\'s config.xml file must exist in the root folder',
    '  - Version number must follow semantic versioning standards',
    '',
    'Usage',
    '  cordova-version'
  ].join('\n')
});

version.update(cli.input[0])
  .then(function(message) {
    process.stdout.write(message);
  })
  .catch(function(error) {
    process.stderr.write(error);
  });
