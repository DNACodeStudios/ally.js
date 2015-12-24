
/*
  Identify the first focusable element in the element's ancestry, including itself
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('array.prototype.findindex');

var _getParents = require('../get/parents');

var _getParents2 = _interopRequireDefault(_getParents);

var _isFocusable = require('../is/focusable');

var _isFocusable2 = _interopRequireDefault(_isFocusable);

var _utilContextToElement = require('../util/context-to-element');

var _utilContextToElement2 = _interopRequireDefault(_utilContextToElement);

exports['default'] = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;

  var element = (0, _utilContextToElement2['default'])({
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

module.exports = exports['default'];
//# sourceMappingURL=focus-target.js.map