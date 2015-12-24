define(['exports', 'module', './pointer-focus-children', './pointer-focus-input', './pointer-focus-parent'], function (exports, module, _pointerFocusChildren, _pointerFocusInput, _pointerFocusParent) {
  // exporting modules to be included the UMD bundle

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _pointerFocusChildren2 = _interopRequireDefault(_pointerFocusChildren);

  var _pointerFocusInput2 = _interopRequireDefault(_pointerFocusInput);

  var _pointerFocusParent2 = _interopRequireDefault(_pointerFocusParent);

  module.exports = {
    pointerFocusChildren: _pointerFocusChildren2['default'],
    pointerFocusInput: _pointerFocusInput2['default'],
    pointerFocusParent: _pointerFocusParent2['default']
  };
});
//# sourceMappingURL=_fix.js.map