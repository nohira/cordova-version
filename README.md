#  [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Build Status][travis-image]][travis-url] [![Code Climate][cc-image]][cc-url]

> Sets config.xml version and build number from package.json

## Install
```sh
$ npm install --save-dev cordova-version
```

## Usage
### Hook
```javascript
// my-version-hook.js
var version = require('cordova-version');

module.exports = function() {
  return version.update();
};
```

```xml
<!-- config.xml -->
<hook src="my-version-hook.js" type="before_prepare" />
```

### Manual
```sh
$ npm install --global cordova-version
$ cordova-version --help
```

## Requirements
- [Semantic Versioning](http://semver.org/) version and build number
- Cordova's config.xml file must exist in the root folder


## License
MIT © [Carlos Antonio](http://carlosanton.io/)


[npm-image]: https://badge.fury.io/js/cordova-version.svg
[npm-url]: https://npmjs.org/package/cordova-version
[travis-image]: https://travis-ci.org/disusered/cordova-version.svg?branch=master
[travis-url]: https://travis-ci.org/disusered/cordova-version
[daviddm-image]: https://david-dm.org/disusered/cordova-version.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/disusered/cordova-version
[cc-image]: https://codeclimate.com/github/disusered/cordova-version/badges/gpa.svg
[cc-url]: https://codeclimate.com/github/disusered/cordova-version

