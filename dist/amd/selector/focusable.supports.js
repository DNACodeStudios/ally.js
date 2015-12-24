define(['exports', 'module', '../supports/memorize-result', '../supports/focus-audio-without-controls', '../supports/focus-video-without-controls', '../supports/svg-focus-method', '../supports/focus-table', '../supports/focus-fieldset', '../supports/focus-summary', '../supports/css-shadow-piercing-deep-combinator'], function (exports, module, _supportsMemorizeResult, _supportsFocusAudioWithoutControls, _supportsFocusVideoWithoutControls, _supportsSvgFocusMethod, _supportsFocusTable, _supportsFocusFieldset, _supportsFocusSummary, _supportsCssShadowPiercingDeepCombinator) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memorizeResult = _interopRequireDefault(_supportsMemorizeResult);

  var _canFocusAudioWithoutControls = _interopRequireDefault(_supportsFocusAudioWithoutControls);

  var _canFocusVideoWithoutControls = _interopRequireDefault(_supportsFocusVideoWithoutControls);

  var _canFocusSvgMethod = _interopRequireDefault(_supportsSvgFocusMethod);

  var _canFocusTable = _interopRequireDefault(_supportsFocusTable);

  var _canFocusFieldset = _interopRequireDefault(_supportsFocusFieldset);

  var _canFocusSummary = _interopRequireDefault(_supportsFocusSummary);

  var _cssShadowPiercingDeepCombinator = _interopRequireDefault(_supportsCssShadowPiercingDeepCombinator);

  module.exports = (0, _memorizeResult['default'])(function () {
    return {
      canFocusAudioWithoutControls: (0, _canFocusAudioWithoutControls['default'])(),
      canFocusVideoWithoutControls: (0, _canFocusVideoWithoutControls['default'])(),
      canFocusSvgMethod: (0, _canFocusSvgMethod['default'])(),
      canFocusTable: (0, _canFocusTable['default'])(),
      canFocusFieldset: (0, _canFocusFieldset['default'])(),
      canFocusSummary: (0, _canFocusSummary['default'])(),
      cssShadowPiercingDeepCombinator: (0, _cssShadowPiercingDeepCombinator['default'])()
    };
  });
});
//# sourceMappingURL=focusable.supports.js.map