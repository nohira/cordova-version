'use strict';
var assert = require('assert');
var version = require('../');

describe('cordova-version node module', function () {
  it('must return an object', function() {
    assert(typeof version === 'object', 'Return value is not an object');
  });

  describe('cordova-version api - update', function () {
    it('must exist', function() {
      var up = version.update();
      assert(up, 'Update method does not exist');
    });

    it('must return a promise', function() {
      var up = version.update();
      assert(typeof up.then === 'function', 'Update method is not thenable');
      assert(typeof up.done === 'function', 'Update method has no done method');
      assert(typeof up.catch === 'function', 'Update method has no catch method');
    });
  });
});
