define(['exports', 'module', 'array.prototype.findindex', '../get/parents', '../is/focusable', '../util/context-to-element'], function (exports, module, _arrayPrototypeFindindex, _getParents, _isFocusable, _utilContextToElement) {
  /*
    Identify the first focusable element in the element's ancestry, including itself
  */

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _getParents2 = _interopRequireDefault(_getParents);

  var _isFocusable2 = _interopRequireDefault(_isFocusable);

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  module.exports = function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;

    var element = (0, _contextToElement['default'])({
      message: 'get/focus-target requires valid options.context',
      context: context
    });

    // trivial ejection check
    if ((0, _isFocusable2['default'])(element)) {
      return element;
    }

    // obtain the element's ancestry
    var _path = (0, _getParents2['default'])({ context: element }).slice(1);
    // find the first element that is actually focusable
    var _firstFocusableIndex = _path.findIndex(_isFocusable2['default']);
    return _path[_firstFocusableIndex] || null;
  };
});
//# sourceMappingURL=focus-target.js.map