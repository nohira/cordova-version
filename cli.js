#!/usr/bin/env node
'use strict';
var meow = require('meow');
var cordovaVersion = require('./');

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

cordovaVersion(cli.input[0]);
