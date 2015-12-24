define(['exports', 'module', '../util/node-array'], function (exports, module, _utilNodeArray) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _nodeArray = _interopRequireDefault(_utilNodeArray);

  module.exports = function (_ref) {
    var context = _ref.context;
    var message = _ref.message;

    var element = (0, _nodeArray['default'])(context)[0];
    if (!element) {
      throw new TypeError(message || 'context-to-element requires valid options.context');
    }

    return element;
  };
});
//# sourceMappingURL=context-to-element.js.map