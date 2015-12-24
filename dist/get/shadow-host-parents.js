'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _shadowHost = require('./shadow-host');

var _shadowHost2 = _interopRequireDefault(_shadowHost);

var _utilContextToElement = require('../util/context-to-element');

var _utilContextToElement2 = _interopRequireDefault(_utilContextToElement);

exports['default'] = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;

  var list = [];
  var element = (0, _utilContextToElement2['default'])({
    message: 'get/shadow-host-parents requires valid options.context',
    context: context
  });

  while (element) {
    element = (0, _shadowHost2['default'])({ context: element });
    if (!element) {
      break;
    }

    list.push(element);
  }

  return list;
};

module.exports = exports['default'];
//# sourceMappingURL=shadow-host-parents.js.map