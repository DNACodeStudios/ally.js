define(['exports', 'module', '../supports/memorize-result', '../supports/focus-invalid-tabindex', '../supports/focus-tabindex-trailing-characters'], function (exports, module, _supportsMemorizeResult, _supportsFocusInvalidTabindex, _supportsFocusTabindexTrailingCharacters) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memorizeResult = _interopRequireDefault(_supportsMemorizeResult);

  var _allowsInvalidValue = _interopRequireDefault(_supportsFocusInvalidTabindex);

  var _allowsTrailingCharacters = _interopRequireDefault(_supportsFocusTabindexTrailingCharacters);

  module.exports = (0, _memorizeResult['default'])(function () {
    return {
      allowsInvalidValue: (0, _allowsInvalidValue['default'])(),
      allowsTrailingCharacters: (0, _allowsTrailingCharacters['default'])()
    };
  });
});
//# sourceMappingURL=valid-tabindex.supports.js.map