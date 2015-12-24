define(['exports', 'module', 'platform'], function (exports, module, _platform) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _platform2 = _interopRequireDefault(_platform);

  // Every Environment except IE9 considers SWF objects focusable
  var result = _platform2['default'].name !== 'IE' || parseFloat(_platform2['default'].version) >= 10;

  module.exports = function () {
    return result;
  };
});
//# sourceMappingURL=focus-object-swf.js.map