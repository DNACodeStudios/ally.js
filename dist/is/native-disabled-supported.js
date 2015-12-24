
// Determine if an element supports the disabled attribute

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _nativeDisabledSupportedSupports = require('./native-disabled-supported.supports');

var _nativeDisabledSupportedSupports2 = _interopRequireDefault(_nativeDisabledSupportedSupports);

var supports = undefined;

// http://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
var disabledElementsPattern = /^(input|select|textarea|button|fieldset)$/;

exports['default'] = function (element) {
  if (!supports) {
    supports = (0, _nativeDisabledSupportedSupports2['default'])();

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

module.exports = exports['default'];
//# sourceMappingURL=native-disabled-supported.js.map