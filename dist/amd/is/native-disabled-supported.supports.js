define(['exports', 'module', '../supports/memorize-result', '../supports/focus-fieldset-disabled'], function (exports, module, _supportsMemorizeResult, _supportsFocusFieldsetDisabled) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memorizeResult = _interopRequireDefault(_supportsMemorizeResult);

  var _canFocusDisabledFieldset = _interopRequireDefault(_supportsFocusFieldsetDisabled);

  module.exports = (0, _memorizeResult['default'])(function () {
    return {
      canFocusDisabledFieldset: (0, _canFocusDisabledFieldset['default'])()
    };
  });
});
//# sourceMappingURL=native-disabled-supported.supports.js.map