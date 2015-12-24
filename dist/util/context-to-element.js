'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilNodeArray = require('../util/node-array');

var _utilNodeArray2 = _interopRequireDefault(_utilNodeArray);

exports['default'] = function (_ref) {
  var context = _ref.context;
  var message = _ref.message;

  var element = (0, _utilNodeArray2['default'])(context)[0];
  if (!element) {
    throw new TypeError(message || 'context-to-element requires valid options.context');
  }

  return element;
};

module.exports = exports['default'];
//# sourceMappingURL=context-to-element.js.map