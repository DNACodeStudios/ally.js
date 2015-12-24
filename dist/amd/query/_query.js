define(['exports', 'module', './first-tabbable', './focusable', './tabbable', './tabsequence'], function (exports, module, _firstTabbable, _focusable, _tabbable, _tabsequence) {
  // exporting modules to be included the UMD bundle

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _firstTabbable2 = _interopRequireDefault(_firstTabbable);

  var _focusable2 = _interopRequireDefault(_focusable);

  var _tabbable2 = _interopRequireDefault(_tabbable);

  var _tabsequence2 = _interopRequireDefault(_tabsequence);

  module.exports = {
    firstTabbable: _firstTabbable2['default'],
    focusable: _focusable2['default'],
    tabbable: _tabbable2['default'],
    tabsequence: _tabsequence2['default']
  };
});
//# sourceMappingURL=_query.js.map