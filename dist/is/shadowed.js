
// determine if an element is the child of a ShadowRoot

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getShadowHost = require('../get/shadow-host');

var _getShadowHost2 = _interopRequireDefault(_getShadowHost);

exports['default'] = function (element) {
  if (element === document) {
    element = document.documentElement;
  }

  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    throw new TypeError('is/shadowed requires an argument of type Element');
  }

  return Boolean((0, _getShadowHost2['default'])({ context: element }));
};

module.exports = exports['default'];
//# sourceMappingURL=shadowed.js.map