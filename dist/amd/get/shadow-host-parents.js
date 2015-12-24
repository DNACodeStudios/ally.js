define(['exports', 'module', './shadow-host', '../util/context-to-element'], function (exports, module, _shadowHost, _utilContextToElement) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _getShadowHost = _interopRequireDefault(_shadowHost);

  var _contextToElement = _interopRequireDefault(_utilContextToElement);

  module.exports = function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;

    var list = [];
    var element = (0, _contextToElement['default'])({
      message: 'get/shadow-host-parents requires valid options.context',
      context: context
    });

    while (element) {
      element = (0, _getShadowHost['default'])({ context: element });
      if (!element) {
        break;
      }

      list.push(element);
    }

    return list;
  };
});
//# sourceMappingURL=shadow-host-parents.js.map