'use strict';

var fs     = require('fs');
var xml2js = require('xml2js');
var npmQ   = require('q');

module.exports = function (context) {
  var Q = context ? context.requireCordovaModule('q') : npmQ;
  var dfd     = new Q.defer();
  var parser  = new xml2js.Parser();
  var builder = new xml2js.Builder();

  var output;
  var dir;
  var path;

  var manifestExists = false;

  try {
    dir = context ? context.opts.projectRoot : __dirname;
    path = dir + '/config.xml';
    manifestExists = fs.existsSync(path);
  } catch (error) {
    dfd.reject();
  }

  if (manifestExists) {
    fs.readFile(path, function(err, data) {
      parser.parseString(data, function(err, result) {
        var modified = result;

        function callback(err) {
          if (err) {
            console.log(err);
            dfd.reject();
          } else {
            console.log('Updating "com.disusered.stetho" AndroidManifest.xml');
            dfd.resolve();
          }
        }

        try {
          // TODO: update config.xml
          console.log(modified);
          output = builder.buildObject(modified);
          fs.writeFile(path, output, callback);
        } catch (error) {
          dfd.reject();
        }
      });
    });
  } else {
    dfd.reject();
  }

  return dfd.promise;
};
