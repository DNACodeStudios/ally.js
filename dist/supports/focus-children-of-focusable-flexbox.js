'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

var _memorizeResult = require('./memorize-result');

var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

// Children of focusable elements with display:flex are focusable in IE10-11
exports['default'] = (0, _memorizeResult2['default'])(function () {
  return (0, _detectFocus2['default'])({
    name: 'can-focus-children-of-focusable-flexbox',
    element: 'div',
    mutate: function mutate(element) {
      element.setAttribute('tabindex', '-1');
      element.setAttribute('style', 'display: -ms-flexbox; display: flex;');
      element.innerHTML = '<span style="display: block;">hello</span>';
      return element.querySelector('span');
    }
  });
});
module.exports = exports['default'];
//# sourceMappingURL=focus-children-of-focusable-flexbox.js.map