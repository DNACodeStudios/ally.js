'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _supportsMemorizeResult = require('../supports/memorize-result');

var _supportsMemorizeResult2 = _interopRequireDefault(_supportsMemorizeResult);

var _supportsFocusInvalidTabindex = require('../supports/focus-invalid-tabindex');

var _supportsFocusInvalidTabindex2 = _interopRequireDefault(_supportsFocusInvalidTabindex);

var _supportsFocusTabindexTrailingCharacters = require('../supports/focus-tabindex-trailing-characters');

var _supportsFocusTabindexTrailingCharacters2 = _interopRequireDefault(_supportsFocusTabindexTrailingCharacters);

exports['default'] = (0, _supportsMemorizeResult2['default'])(function () {
  return {
    allowsInvalidValue: (0, _supportsFocusInvalidTabindex2['default'])(),
    allowsTrailingCharacters: (0, _supportsFocusTabindexTrailingCharacters2['default'])()
  };
});
module.exports = exports['default'];
//# sourceMappingURL=valid-tabindex.supports.js.map