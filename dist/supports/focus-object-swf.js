'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _platform = require('platform');

var _platform2 = _interopRequireDefault(_platform);

// Every Environment except IE9 considers SWF objects focusable
var result = _platform2['default'].name !== 'IE' || parseFloat(_platform2['default'].version) >= 10;

exports['default'] = function () {
  return result;
};

module.exports = exports['default'];
//# sourceMappingURL=focus-object-swf.js.map