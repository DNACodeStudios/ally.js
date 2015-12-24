'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilContextToElement = require('../util/context-to-element');

var _utilContextToElement2 = _interopRequireDefault(_utilContextToElement);

// [elem, elem.parent, elem.parent.parent, …, html]
// will not contain the shadowRoot (DOCUMENT_FRAGMENT_NODE) and shadowHost

exports['default'] = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;

  var list = [];
  var element = (0, _utilContextToElement2['default'])({
    message: 'get/parents requires valid options.context',
    context: context
  });

  while (element) {
    list.push(element);
    element = element.parentElement;
  }

  return list;
};

module.exports = exports['default'];
//# sourceMappingURL=parents.js.map