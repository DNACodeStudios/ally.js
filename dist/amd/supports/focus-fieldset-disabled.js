define(['exports', 'module', './detect-focus', './memorize-result'], function (exports, module, _detectFocus, _memorizeResult) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  // fieldset[tabindex=0][disabled] should not be focusable, but Blink and WebKit disagree
  // @specification http://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
  // @browser-issue Chromium https://crbug.com/453847
  // @browser-issue WebKit https://bugs.webkit.org/show_bug.cgi?id=141086
  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'can-focus-disabled-fieldset',
      element: 'fieldset',
      mutate: function mutate(element) {
        element.setAttribute('tabindex', 0);
        element.setAttribute('disabled', 'disabled');
      }
    });
  });
});
//# sourceMappingURL=focus-fieldset-disabled.js.map