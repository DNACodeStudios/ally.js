define(['exports', 'module', './focus-source', './focus-within'], function (exports, module, _focusSource, _focusWithin) {
  // exporting modules to be included the UMD bundle

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _focusSource2 = _interopRequireDefault(_focusSource);

  var _focusWithin2 = _interopRequireDefault(_focusWithin);

  module.exports = {
    focusSource: _focusSource2['default'],
    focusWithin: _focusWithin2['default']
  };
});
//# sourceMappingURL=_style.js.map