'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _supportsMemorizeResult = require('../supports/memorize-result');

var _supportsMemorizeResult2 = _interopRequireDefault(_supportsMemorizeResult);

var _supportsCssShadowPiercingDeepCombinator = require('../supports/css-shadow-piercing-deep-combinator');

var _supportsCssShadowPiercingDeepCombinator2 = _interopRequireDefault(_supportsCssShadowPiercingDeepCombinator);

exports['default'] = (0, _supportsMemorizeResult2['default'])(function () {
  return {
    cssShadowPiercingDeepCombinator: (0, _supportsCssShadowPiercingDeepCombinator2['default'])()
  };
});
module.exports = exports['default'];
//# sourceMappingURL=focus-within.supports.js.map