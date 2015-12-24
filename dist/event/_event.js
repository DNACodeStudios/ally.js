
// exporting modules to be included the UMD bundle

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _activeElement = require('./active-element');

var _activeElement2 = _interopRequireDefault(_activeElement);

var _shadowFocus = require('./shadow-focus');

var _shadowFocus2 = _interopRequireDefault(_shadowFocus);

exports['default'] = {
  activeElement: _activeElement2['default'],
  shadowFocus: _shadowFocus2['default']
};
module.exports = exports['default'];
//# sourceMappingURL=_event.js.map