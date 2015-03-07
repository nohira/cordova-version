'use strict';

var Q = require('q');

module.exports = function () {
  var dfd = Q.defer();
  dfd.resolve();
  return dfd.promise;
};
