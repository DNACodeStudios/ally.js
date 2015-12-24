'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _isValidTabindex = require('../is/valid-tabindex');

var _isValidTabindex2 = _interopRequireDefault(_isValidTabindex);

exports['default'] = function (element) {
  if (!(0, _isValidTabindex2['default'])(element)) {
    return null;
  }

  // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
  var tabindex = parseInt(element.getAttribute('tabindex'), 10);
  return isNaN(tabindex) ? -1 : tabindex;
};

module.exports = exports['default'];
//# sourceMappingURL=tabindex-value.js.map