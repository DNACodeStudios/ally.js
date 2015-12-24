define(['exports', 'module', './focus-relevant', './visible', './disabled', './only-tabbable'], function (exports, module, _focusRelevant, _visible, _disabled, _onlyTabbable) {
  // determine if an element can be focused

  // http://www.w3.org/TR/html5/editing.html#focus-management

  // NOTE: The following known issues exist:
  //   Gecko: `svg a[xlink|href]` is not identified as focusable (because SVGElement.prototype.focus is missing)
  //   Blink, WebKit: SVGElements that have been made focusable by adding a focus event listener are not identified as focusable

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isFocusRelevant = _interopRequireDefault(_focusRelevant);

  var _isVisible = _interopRequireDefault(_visible);

  var _isDisabled = _interopRequireDefault(_disabled);

  var _isOnlyTabbable = _interopRequireDefault(_onlyTabbable);

  function isOnlyFocusRelevant(element) {
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === 'embed' || nodeName === 'keygen') {
      // embed is considered focus-relevant but not focusable
      // see https://github.com/medialize/ally.js/issues/82
      return true;
    }

    return false;
  }

  module.exports = function (element) {
    if (element === document) {
      element = document.documentElement;
    }

    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError('is/focusable requires an argument of type Element');
    }

    if (!(0, _isFocusRelevant['default'])(element) || isOnlyFocusRelevant(element)) {
      return false;
    }

    if ((0, _isDisabled['default'])(element)) {
      return false;
    }

    if ((0, _isOnlyTabbable['default'])(element)) {
      // some elements may be keyboard focusable, but not script focusable
      return false;
    }

    // elements that are not rendered, cannot be focused
    if (!(0, _isVisible['default'])(element)) {
      return false;
    }

    return true;
  };
});
//# sourceMappingURL=focusable.js.map