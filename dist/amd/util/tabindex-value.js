define(['exports', 'module', '../is/valid-tabindex'], function (exports, module, _isValidTabindex) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isValidTabindex2 = _interopRequireDefault(_isValidTabindex);

  module.exports = function (element) {
    if (!(0, _isValidTabindex2['default'])(element)) {
      return null;
    }

    // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    var tabindex = parseInt(element.getAttribute('tabindex'), 10);
    return isNaN(tabindex) ? -1 : tabindex;
  };
});
//# sourceMappingURL=tabindex-value.js.map