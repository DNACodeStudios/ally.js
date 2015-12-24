
// http://www.w3.org/TR/html5/editing.html#focusable
// http://www.w3.org/WAI/PF/aria-practices/#keyboard

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilNodeArray = require('../util/node-array');

var _utilNodeArray2 = _interopRequireDefault(_utilNodeArray);

var _focusableStrict = require('./focusable.strict');

var _focusableStrict2 = _interopRequireDefault(_focusableStrict);

var _focusableQuick = require('./focusable.quick');

var _focusableQuick2 = _interopRequireDefault(_focusableQuick);

exports['default'] = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;
  var includeContext = _ref.includeContext;
  var _ref$strategy = _ref.strategy;
  var strategy = _ref$strategy === undefined ? 'quick' : _ref$strategy;

  context = (0, _utilNodeArray2['default'])(context)[0];
  // alias document to document.documentElement for convenience
  if (!context || context.nodeType === Node.DOCUMENT_NODE) {
    context = document.documentElement;
  }

  if (context.nodeType !== Node.ELEMENT_NODE) {
    throw new TypeError('query/focusable requires an argument of type Element');
  }

  if (strategy === 'quick') {
    return (0, _focusableQuick2['default'])({ context: context, includeContext: includeContext });
  } else if (strategy === 'strict' || strategy === 'all') {
    return (0, _focusableStrict2['default'])({ context: context, includeContext: includeContext, strategy: strategy });
  }

  throw new TypeError('query/focusable requires option.strategy to be one of ["quick", "strict"]');
};

module.exports = exports['default'];
//# sourceMappingURL=focusable.js.map