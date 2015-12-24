
// http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
// http://www.w3.org/WAI/PF/aria-practices/#keyboard

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _focusable = require('./focusable');

var _focusable2 = _interopRequireDefault(_focusable);

var _isTabbable = require('../is/tabbable');

var _isTabbable2 = _interopRequireDefault(_isTabbable);

exports['default'] = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;
  var includeContext = _ref.includeContext;
  var strategy = _ref.strategy;

  return (0, _focusable2['default'])({ context: context, includeContext: includeContext, strategy: strategy }).filter(_isTabbable2['default']);
};

module.exports = exports['default'];
//# sourceMappingURL=tabbable.js.map