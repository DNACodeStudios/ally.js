'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

var _memorizeResult = require('./memorize-result');

var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

// only Trident and Edge are able to focus a <label tabindex="-1">,
// as all other browsers seem hardwired to forward focus to the target input, if possible
exports['default'] = (0, _memorizeResult2['default'])(function () {
  return (0, _detectFocus2['default'])({
    name: 'can-focus-label-tabindex',
    element: 'label',
    mutate: function mutate(element) {
      element.setAttribute('tabindex', '-1');
    },
    validate: function validate(element) {
      // force layout in Chrome 49, otherwise the element won't be focusable
      /* eslint-disable no-unused-vars */
      var variableToPreventDeadCodeElimination = element.offsetHeight;
      /* eslint-enable no-unused-vars */
      element.focus();
      return document.activeElement === element;
    }
  });
});
module.exports = exports['default'];
//# sourceMappingURL=focus-label-tabindex.js.map