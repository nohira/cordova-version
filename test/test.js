'use strict';
var assert = require('assert');
var cordovaVersion = require('../');

describe('cordova-version node module', function () {
  it('must have at least one test', function () {
    cordovaVersion();
    assert(false, 'I was too lazy to write any tests. Shame on me.');
  });
});
