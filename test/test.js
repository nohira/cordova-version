'use strict';
var assert = require('assert');
var cordovaVersion = require('../');

describe('cordova-version node module', function () {
  it('must return a promise', function() {
    var cdv = cordovaVersion();
    assert(typeof cdv.then === 'function', 'Return value is not thenable');
    assert(typeof cdv.done === 'function', 'Return value has no done method');
    assert(typeof cdv.catch === 'function', 'Return value has no catch method');
  });
});
