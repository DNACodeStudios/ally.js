define(['exports', 'module', './active-element', './shadow-focus'], function (exports, module, _activeElement, _shadowFocus) {
  // exporting modules to be included the UMD bundle

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _activeElement2 = _interopRequireDefault(_activeElement);

  var _shadowFocus2 = _interopRequireDefault(_shadowFocus);

  module.exports = {
    activeElement: _activeElement2['default'],
    shadowFocus: _shadowFocus2['default']
  };
});
//# sourceMappingURL=_event.js.map