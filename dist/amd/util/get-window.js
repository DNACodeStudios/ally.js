define(['exports', 'module', './get-document'], function (exports, module, _getDocument) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _getDocument2 = _interopRequireDefault(_getDocument);

  module.exports = function (node) {
    var _document = (0, _getDocument2['default'])(node);
    return _document.defaultView || window;
  };
});
//# sourceMappingURL=get-window.js.map