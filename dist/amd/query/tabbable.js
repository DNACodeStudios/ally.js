define(['exports', 'module', './focusable', '../is/tabbable'], function (exports, module, _focusable, _isTabbable) {
  // http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
  // http://www.w3.org/WAI/PF/aria-practices/#keyboard

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _queryFocusable = _interopRequireDefault(_focusable);

  var _isTabbable2 = _interopRequireDefault(_isTabbable);

  module.exports = function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;
    var includeContext = _ref.includeContext;
    var strategy = _ref.strategy;

    return (0, _queryFocusable['default'])({ context: context, includeContext: includeContext, strategy: strategy }).filter(_isTabbable2['default']);
  };
});
//# sourceMappingURL=tabbable.js.map