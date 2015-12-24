define(['exports', 'module', './active-elements', './focus-target', './insignificant-branches', './parents', './shadow-host-parents', './shadow-host'], function (exports, module, _activeElements, _focusTarget, _insignificantBranches, _parents, _shadowHostParents, _shadowHost) {
  // exporting modules to be included the UMD bundle

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _activeElements2 = _interopRequireDefault(_activeElements);

  var _focusTarget2 = _interopRequireDefault(_focusTarget);

  var _insignificantBranches2 = _interopRequireDefault(_insignificantBranches);

  var _parents2 = _interopRequireDefault(_parents);

  var _shadowHostParents2 = _interopRequireDefault(_shadowHostParents);

  var _shadowHost2 = _interopRequireDefault(_shadowHost);

  module.exports = {
    activeElements: _activeElements2['default'],
    focusTarget: _focusTarget2['default'],
    insignificantBranches: _insignificantBranches2['default'],
    parents: _parents2['default'],
    shadowHostParents: _shadowHostParents2['default'],
    shadowHost: _shadowHost2['default']
  };
});
//# sourceMappingURL=_get.js.map