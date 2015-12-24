
/*
  trigger a callback once the context element is focusable and is fully visible in the viewport
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _visibleArea = require('./visible-area');

var _visibleArea2 = _interopRequireDefault(_visibleArea);

var _isFocusable = require('../is/focusable');

var _isFocusable2 = _interopRequireDefault(_isFocusable);

var _utilGetDocument = require('../util/get-document');

var _utilGetDocument2 = _interopRequireDefault(_utilGetDocument);

var _utilNodeArray = require('../util/node-array');

var _utilNodeArray2 = _interopRequireDefault(_utilNodeArray);

exports['default'] = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;
  var callback = _ref.callback;
  var area = _ref.area;

  if (typeof callback !== 'function') {
    throw new TypeError('when/focusable requires options.callback to be a function');
  }

  if (context === undefined) {
    throw new TypeError('when/focusable requires valid options.context');
  }

  var element = (0, _utilNodeArray2['default'])(context)[0];
  var _document = (0, _utilGetDocument2['default'])(element);
  if (!element) {
    throw new TypeError('when/focusable requires valid options.context');
  }

  var filterCallback = function filterCallback(target) {
    if (!(0, _isFocusable2['default'])(target)) {
      return false;
    }

    return callback(target);
  };

  var handle = (0, _visibleArea2['default'])({ context: element, callback: filterCallback, area: area });
  var disengage = function disengage() {
    _document.removeEventListener('focus', disengage, true);
    handle && handle.disengage();
  };

  _document.addEventListener('focus', disengage, true);

  return { disengage: disengage };
};

module.exports = exports['default'];
//# sourceMappingURL=focusable.js.map