define(['exports', 'module', '../selector/focusable', '../is/focusable'], function (exports, module, _selectorFocusable, _isFocusable) {
  // http://www.w3.org/TR/html5/editing.html#focusable
  // http://www.w3.org/WAI/PF/aria-practices/#keyboard

  'use strict';

  module.exports = queryFocusableQuick;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _selector2 = _interopRequireDefault(_selectorFocusable);

  var _isFocusable2 = _interopRequireDefault(_isFocusable);

  function queryFocusableQuick() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;
    var includeContext = _ref.includeContext;

    var _selector = (0, _selector2['default'])();
    var elements = context.querySelectorAll(_selector);
    // the selector potentially matches more than really is focusable
    var result = [].filter.call(elements, _isFocusable2['default']);
    // add context if requested and focusable
    if (includeContext && (0, _isFocusable2['default'])(context)) {
      result.unshift(context);
    }

    return result;
  }
});
//# sourceMappingURL=focusable.quick.js.map