'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _supportsMemorizeResult = require('../supports/memorize-result');

var _supportsMemorizeResult2 = _interopRequireDefault(_supportsMemorizeResult);

var _supportsFocusAreaImgTabindex = require('../supports/focus-area-img-tabindex');

var _supportsFocusAreaImgTabindex2 = _interopRequireDefault(_supportsFocusAreaImgTabindex);

var _supportsFocusAreaTabindex = require('../supports/focus-area-tabindex');

var _supportsFocusAreaTabindex2 = _interopRequireDefault(_supportsFocusAreaTabindex);

var _supportsFocusAreaWithoutHref = require('../supports/focus-area-without-href');

var _supportsFocusAreaWithoutHref2 = _interopRequireDefault(_supportsFocusAreaWithoutHref);

var _supportsFocusBrokenImageMap = require('../supports/focus-broken-image-map');

var _supportsFocusBrokenImageMap2 = _interopRequireDefault(_supportsFocusBrokenImageMap);

exports['default'] = (0, _supportsMemorizeResult2['default'])(function () {
  return {
    canFocusAreaImgTabindex: (0, _supportsFocusAreaImgTabindex2['default'])(),
    canFocusAreaTabindex: (0, _supportsFocusAreaTabindex2['default'])(),
    canFocusAreaWithoutHref: (0, _supportsFocusAreaWithoutHref2['default'])(),
    canFocusBrokenImageMaps: (0, _supportsFocusBrokenImageMap2['default'])()
  };
});
module.exports = exports['default'];
//# sourceMappingURL=valid-area.supports.js.map