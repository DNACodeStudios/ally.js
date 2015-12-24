define(['exports', 'module', './focusable', './key', './visible-area'], function (exports, module, _focusable, _key, _visibleArea) {
  // exporting modules to be included the UMD bundle

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _focusable2 = _interopRequireDefault(_focusable);

  var _key2 = _interopRequireDefault(_key);

  var _visibleArea2 = _interopRequireDefault(_visibleArea);

  module.exports = {
    focusable: _focusable2['default'],
    key: _key2['default'],
    visibleArea: _visibleArea2['default']
  };
});
//# sourceMappingURL=_when.js.map