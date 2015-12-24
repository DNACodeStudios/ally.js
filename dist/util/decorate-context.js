
/*
  The Context Decorator is intended to allow modules to easily map dis/engage methods to the general
  dis/engage and context API format
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilNodeArray = require('../util/node-array');

var _utilNodeArray2 = _interopRequireDefault(_utilNodeArray);

function destruct() /* {force: false} */{
  if (!this.context) {
    return;
  }

  this.context.forEach(this.disengage);
  this.context = null;
  this.engage = null;
  this.disengage = null;
}

function initialize() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;

  this.context = (0, _utilNodeArray2['default'])(context || document);
  this.context.forEach(this.engage);
  return {
    disengage: destruct.bind(this)
  };
}

function noop() {}

exports['default'] = function () {
  var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var engage = _ref2.engage;
  var disengage = _ref2.disengage;

  var data = {
    engage: engage || noop,
    disengage: disengage || noop,
    context: null
  };

  return initialize.bind(data);
};

module.exports = exports['default'];
//# sourceMappingURL=decorate-context.js.map