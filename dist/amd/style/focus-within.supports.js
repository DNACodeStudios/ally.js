define(['exports', 'module', '../supports/memorize-result', '../supports/css-shadow-piercing-deep-combinator'], function (exports, module, _supportsMemorizeResult, _supportsCssShadowPiercingDeepCombinator) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memorizeResult = _interopRequireDefault(_supportsMemorizeResult);

  var _cssShadowPiercingDeepCombinator = _interopRequireDefault(_supportsCssShadowPiercingDeepCombinator);

  module.exports = (0, _memorizeResult['default'])(function () {
    return {
      cssShadowPiercingDeepCombinator: (0, _cssShadowPiercingDeepCombinator['default'])()
    };
  });
});
//# sourceMappingURL=focus-within.supports.js.map