define(['exports', 'module', '../util/node-array', './focusable.strict', './focusable.quick'], function (exports, module, _utilNodeArray, _focusableStrict, _focusableQuick) {
  // http://www.w3.org/TR/html5/editing.html#focusable
  // http://www.w3.org/WAI/PF/aria-practices/#keyboard

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _nodeArray = _interopRequireDefault(_utilNodeArray);

  var _queryFocusableStrict = _interopRequireDefault(_focusableStrict);

  var _queryFocusableQuick = _interopRequireDefault(_focusableQuick);

  module.exports = function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;
    var includeContext = _ref.includeContext;
    var _ref$strategy = _ref.strategy;
    var strategy = _ref$strategy === undefined ? 'quick' : _ref$strategy;

    context = (0, _nodeArray['default'])(context)[0];
    // alias document to document.documentElement for convenience
    if (!context || context.nodeType === Node.DOCUMENT_NODE) {
      context = document.documentElement;
    }

    if (context.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError('query/focusable requires an argument of type Element');
    }

    if (strategy === 'quick') {
      return (0, _queryFocusableQuick['default'])({ context: context, includeContext: includeContext });
    } else if (strategy === 'strict' || strategy === 'all') {
      return (0, _queryFocusableStrict['default'])({ context: context, includeContext: includeContext, strategy: strategy });
    }

    throw new TypeError('query/focusable requires option.strategy to be one of ["quick", "strict"]');
  };
});
//# sourceMappingURL=focusable.js.map