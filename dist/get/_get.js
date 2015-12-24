
// exporting modules to be included the UMD bundle

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _activeElements = require('./active-elements');

var _activeElements2 = _interopRequireDefault(_activeElements);

var _focusTarget = require('./focus-target');

var _focusTarget2 = _interopRequireDefault(_focusTarget);

var _insignificantBranches = require('./insignificant-branches');

var _insignificantBranches2 = _interopRequireDefault(_insignificantBranches);

var _parents = require('./parents');

var _parents2 = _interopRequireDefault(_parents);

var _shadowHostParents = require('./shadow-host-parents');

var _shadowHostParents2 = _interopRequireDefault(_shadowHostParents);

var _shadowHost = require('./shadow-host');

var _shadowHost2 = _interopRequireDefault(_shadowHost);

exports['default'] = {
  activeElements: _activeElements2['default'],
  focusTarget: _focusTarget2['default'],
  insignificantBranches: _insignificantBranches2['default'],
  parents: _parents2['default'],
  shadowHostParents: _shadowHostParents2['default'],
  shadowHost: _shadowHost2['default']
};
module.exports = exports['default'];
//# sourceMappingURL=_get.js.map