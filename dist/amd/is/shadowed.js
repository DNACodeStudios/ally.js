define(['exports', 'module', '../get/shadow-host'], function (exports, module, _getShadowHost) {
  // determine if an element is the child of a ShadowRoot

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _getShadowHost2 = _interopRequireDefault(_getShadowHost);

  module.exports = function (element) {
    if (element === document) {
      element = document.documentElement;
    }

    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError('is/shadowed requires an argument of type Element');
    }

    return Boolean((0, _getShadowHost2['default'])({ context: element }));
  };
});
//# sourceMappingURL=shadowed.js.map