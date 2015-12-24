'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _supportsMemorizeResult = require('../supports/memorize-result');

var _supportsMemorizeResult2 = _interopRequireDefault(_supportsMemorizeResult);

var _supportsFocusAudioWithoutControls = require('../supports/focus-audio-without-controls');

var _supportsFocusAudioWithoutControls2 = _interopRequireDefault(_supportsFocusAudioWithoutControls);

var _supportsFocusVideoWithoutControls = require('../supports/focus-video-without-controls');

var _supportsFocusVideoWithoutControls2 = _interopRequireDefault(_supportsFocusVideoWithoutControls);

var _supportsSvgFocusMethod = require('../supports/svg-focus-method');

var _supportsSvgFocusMethod2 = _interopRequireDefault(_supportsSvgFocusMethod);

var _supportsFocusTable = require('../supports/focus-table');

var _supportsFocusTable2 = _interopRequireDefault(_supportsFocusTable);

var _supportsFocusFieldset = require('../supports/focus-fieldset');

var _supportsFocusFieldset2 = _interopRequireDefault(_supportsFocusFieldset);

var _supportsFocusSummary = require('../supports/focus-summary');

var _supportsFocusSummary2 = _interopRequireDefault(_supportsFocusSummary);

var _supportsCssShadowPiercingDeepCombinator = require('../supports/css-shadow-piercing-deep-combinator');

var _supportsCssShadowPiercingDeepCombinator2 = _interopRequireDefault(_supportsCssShadowPiercingDeepCombinator);

exports['default'] = (0, _supportsMemorizeResult2['default'])(function () {
  return {
    canFocusAudioWithoutControls: (0, _supportsFocusAudioWithoutControls2['default'])(),
    canFocusVideoWithoutControls: (0, _supportsFocusVideoWithoutControls2['default'])(),
    canFocusSvgMethod: (0, _supportsSvgFocusMethod2['default'])(),
    canFocusTable: (0, _supportsFocusTable2['default'])(),
    canFocusFieldset: (0, _supportsFocusFieldset2['default'])(),
    canFocusSummary: (0, _supportsFocusSummary2['default'])(),
    cssShadowPiercingDeepCombinator: (0, _supportsCssShadowPiercingDeepCombinator2['default'])()
  };
});
module.exports = exports['default'];
//# sourceMappingURL=focusable.supports.js.map