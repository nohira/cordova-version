#!/usr/bin/env node
'use strict';
var meow = require('meow');
var cordovaVersion = require('./');

var cli = meow({
  help: [
    'Usage',
    '  cordova-version <input>',
    '',
    'Example',
    '  cordova-version Unicorn'
  ].join('\n')
});

cordovaVersion(cli.input[0]);
