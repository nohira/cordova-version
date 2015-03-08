'use strict';

var fs     = require('fs');
var xml2js = require('xml2js');
var npmQ   = require('q');
var semver = require('semver-utils');

module.exports = function (context) {
  var Q = context ? context.requireCordovaModule('q') : npmQ;
  var dfd     = new Q.defer();
  var parser  = new xml2js.Parser();
  var builder = new xml2js.Builder();

  var output;
  var dir;
  var path;
  var pkg;

  var manifestExists = false;

  try {
    dir = context ? context.opts.projectRoot : process.cwd();
    pkg = semver.parse(require(dir + '/package.json').version);
    path = dir + '/config.xml';
    manifestExists = fs.existsSync(path);
  } catch (error) {
    dfd.reject('Unable to find config.xml in path');
  }

  if (manifestExists) {
    fs.readFile(path, function(err, data) {
      parser.parseString(data, function(err, result) {
        var modified = result;

        function callback(err) {
          if (err) {
            dfd.reject('Error writing to config.xml');
          } else {
            dfd.resolve('Updated config.xml successfully');
          }
        }

        try {
          modified.widget.$['version'] = pkg.version;

          if (pkg.build) {
            modified.widget.$['android-versionCode'] = pkg.build;
            modified.widget.$['ios-CFBundleVersion'] = pkg.build;
          }

          output = builder.buildObject(modified);
          fs.writeFile(path, output, callback);
        } catch (error) {
          dfd.reject('Error writing to config.xml');
        }
      });
    });
  } else {
    dfd.reject('Unable to find config.xml in path');
  }

  return dfd.promise;
};
