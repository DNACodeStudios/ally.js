
/*
  execute a callback once an element became fully visible in the viewport
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('../prototype/window.requestanimationframe');

var _isVisible = require('../is/visible');

var _isVisible2 = _interopRequireDefault(_isVisible);

var _utilVisibleArea = require('../util/visible-area');

var _utilVisibleArea2 = _interopRequireDefault(_utilVisibleArea);

var _utilNodeArray = require('../util/node-array');

var _utilNodeArray2 = _interopRequireDefault(_utilNodeArray);

exports['default'] = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;
  var callback = _ref.callback;
  var area = _ref.area;

  if (typeof callback !== 'function') {
    throw new TypeError('when/visible-area requires options.callback to be a function');
  }

  if (context === undefined) {
    throw new TypeError('when/visible-area requires valid options.context');
  }

  if (typeof area !== 'number') {
    area = 1;
  }

  var element = (0, _utilNodeArray2['default'])(context)[0];
  if (!element) {
    throw new TypeError('when/visible-area requires valid options.context');
  }

  if ((0, _isVisible2['default'])(element) && (0, _utilVisibleArea2['default'])(element) >= area && callback(element) !== false) {
    // element is already visible, trivial escape
    return null;
  }

  var raf = undefined;
  var disengage = function disengage() {
    raf && cancelAnimationFrame(raf);
  };

  var runWhenReady = function runWhenReady() {
    if (!(0, _isVisible2['default'])(element) || (0, _utilVisibleArea2['default'])(element) < area || callback(element) === false) {
      raf = requestAnimationFrame(runWhenReady);
      return;
    }

    disengage();
  };

  runWhenReady();
  return { disengage: disengage };
};

module.exports = exports['default'];
//# sourceMappingURL=visible-area.js.map