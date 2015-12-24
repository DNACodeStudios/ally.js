'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

var _memorizeResult = require('./memorize-result');

var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

exports['default'] = (0, _memorizeResult2['default'])(function () {
  return (0, _detectFocus2['default'])({
    name: 'can-focus-summary',
    element: 'details',
    mutate: function mutate(element) {
      element.innerHTML = '<summary>foo</summary><p>content</p>';
      return element.firstElementChild;
    }
  });
});
module.exports = exports['default'];
//# sourceMappingURL=focus-summary.js.map