'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _supportsMemorizeResult = require('../supports/memorize-result');

var _supportsMemorizeResult2 = _interopRequireDefault(_supportsMemorizeResult);

var _supportsFocusFieldsetDisabled = require('../supports/focus-fieldset-disabled');

var _supportsFocusFieldsetDisabled2 = _interopRequireDefault(_supportsFocusFieldsetDisabled);

exports['default'] = (0, _supportsMemorizeResult2['default'])(function () {
  return {
    canFocusDisabledFieldset: (0, _supportsFocusFieldsetDisabled2['default'])()
  };
});
module.exports = exports['default'];
//# sourceMappingURL=native-disabled-supported.supports.js.map