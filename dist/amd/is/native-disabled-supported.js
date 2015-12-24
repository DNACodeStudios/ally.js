define(['exports', 'module', './native-disabled-supported.supports'], function (exports, module, _nativeDisabledSupportedSupports) {
  // Determine if an element supports the disabled attribute

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _supports2 = _interopRequireDefault(_nativeDisabledSupportedSupports);

  var supports = undefined;

  // http://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
  var disabledElementsPattern = /^(input|select|textarea|button|fieldset)$/;

  module.exports = function (element) {
    if (!supports) {
      supports = (0, _supports2['default'])();

      // fieldset[tabindex=0][disabled] should not be focusable, but Blink and WebKit disagree
      // @specification http://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
      // @browser-issue Chromium https://crbug.com/453847
      // @browser-issue WebKit https://bugs.webkit.org/show_bug.cgi?id=141086
      if (supports.canFocusDisabledFieldset) {
        disabledElementsPattern = /^(input|select|textarea|button)$/;
      }
    }

    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError('is/native-disabled-supported requires an argument of type Element');
    }

    var nodeName = element.nodeName.toLowerCase();
    return Boolean(disabledElementsPattern.test(nodeName));
  };
});
//# sourceMappingURL=native-disabled-supported.js.map