'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _platform = require('platform');

var _platform2 = _interopRequireDefault(_platform);

// https://jsbin.com/vafaba/3/edit?html,js,console,output
var result = _platform2['default'].name === 'Firefox' || _platform2['default'].name === 'IE';

exports['default'] = function () {
  return result;
};

module.exports = exports['default'];
//# sourceMappingURL=tabsequence-area-at-img-position.js.map