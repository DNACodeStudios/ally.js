define(['exports', 'module', 'platform'], function (exports, module, _platform) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _platform2 = _interopRequireDefault(_platform);

  // https://jsbin.com/vafaba/3/edit?html,js,console,output
  var result = _platform2['default'].name === 'Firefox' || _platform2['default'].name === 'IE';

  module.exports = function () {
    return result;
  };
});
//# sourceMappingURL=tabsequence-area-at-img-position.js.map