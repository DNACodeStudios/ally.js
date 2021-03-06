
// exporting modules to be included the UMD bundle

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _attribute = require('./attribute');

var _attribute2 = _interopRequireDefault(_attribute);

var _keycode = require('./keycode');

var _keycode2 = _interopRequireDefault(_keycode);

exports['default'] = {
  attribute: _attribute2['default'],
  keycode: _keycode2['default']
};
module.exports = exports['default'];
//# sourceMappingURL=_map.js.map