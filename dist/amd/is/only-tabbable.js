define(['exports', 'module', 'platform', '../util/get-window', '../util/tabindex-value'], function (exports, module, _platform, _utilGetWindow, _utilTabindexValue) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _platform2 = _interopRequireDefault(_platform);

  var _getWindow = _interopRequireDefault(_utilGetWindow);

  var _tabindexValue = _interopRequireDefault(_utilTabindexValue);

  module.exports = function (element) {
    if (element === document) {
      element = document.documentElement;
    }

    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError('is/only-tabbable requires an argument of type Element');
    }

    var nodeName = element.nodeName.toLowerCase();
    var tabindex = (0, _tabindexValue['default'])(element);

    if (nodeName === 'label' && _platform2['default'].name === 'Firefox') {
      // Firefox cannot focus, but tab to: label[tabindex=0]
      return tabindex !== null && tabindex >= 0;
    }

    if (nodeName === 'object' && element.getAttribute('type') === 'image/svg+xml' && _platform2['default'].name === 'IE') {
      // Internet Explorer cannot focus, but tab to: object[type="image/svg+xml"]
      // [tabindex=-1] negates the tabbing
      return tabindex === null || tabindex >= 0;
    }

    if (nodeName === 'svg' && _platform2['default'].name === 'IE') {
      return element.getAttribute('focusable') !== 'false';
    }

    var _window = (0, _getWindow['default'])(element);
    if (element instanceof _window.SVGElement) {
      if (nodeName === 'a' && element.hasAttribute('xlink:href')) {
        // any focusable child of <svg> cannot be focused, but tabbed to
        if (_platform2['default'].name === 'Firefox') {
          return true;
        }
        if (_platform2['default'].name === 'IE') {
          return element.getAttribute('focusable') !== 'false';
        }
      }
      if (_platform2['default'].name === 'IE') {
        return element.getAttribute('focusable') === 'true';
      }
    }

    return false;
  };
});
//# sourceMappingURL=only-tabbable.js.map