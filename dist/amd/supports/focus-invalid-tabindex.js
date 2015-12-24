define(['exports', 'module', './detect-focus', './memorize-result'], function (exports, module, _detectFocus, _memorizeResult) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  // Firefox allows *any* value and treats invalid values like tabindex="-1"
  // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'allows-invalid-tabindex-value',
      element: 'div',
      mutate: function mutate(element) {
        element.setAttribute('tabindex', 'invalid-value');
      }
    });
  });
});
//# sourceMappingURL=focus-invalid-tabindex.js.map