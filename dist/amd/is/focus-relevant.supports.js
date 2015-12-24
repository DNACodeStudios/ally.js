define(['exports', 'module', '../supports/memorize-result', '../supports/focus-audio-without-controls', '../supports/focus-children-of-focusable-flexbox', '../supports/focus-fieldset', '../supports/focus-img-ismap', '../supports/focus-img-usemap-tabindex', '../supports/focus-label-tabindex', '../supports/focus-object-svg', '../supports/focus-object-swf', '../supports/focus-scroll-body', '../supports/focus-scroll-container', '../supports/focus-scroll-container-without-overflow', '../supports/focus-summary', '../supports/svg-focus-method', '../supports/focus-table', '../supports/focus-video-without-controls'], function (exports, module, _supportsMemorizeResult, _supportsFocusAudioWithoutControls, _supportsFocusChildrenOfFocusableFlexbox, _supportsFocusFieldset, _supportsFocusImgIsmap, _supportsFocusImgUsemapTabindex, _supportsFocusLabelTabindex, _supportsFocusObjectSvg, _supportsFocusObjectSwf, _supportsFocusScrollBody, _supportsFocusScrollContainer, _supportsFocusScrollContainerWithoutOverflow, _supportsFocusSummary, _supportsSvgFocusMethod, _supportsFocusTable, _supportsFocusVideoWithoutControls) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memorizeResult = _interopRequireDefault(_supportsMemorizeResult);

  var _canFocusAudioWithoutControls = _interopRequireDefault(_supportsFocusAudioWithoutControls);

  var _canFocusChildrenOfFocusableFlexbox = _interopRequireDefault(_supportsFocusChildrenOfFocusableFlexbox);

  var _canFocusFieldset = _interopRequireDefault(_supportsFocusFieldset);

  var _canFocusImgIsmap = _interopRequireDefault(_supportsFocusImgIsmap);

  var _canFocusImgUsemapTabindex = _interopRequireDefault(_supportsFocusImgUsemapTabindex);

  var _canFocusLabelTabindex = _interopRequireDefault(_supportsFocusLabelTabindex);

  var _canFocusObjectSvg = _interopRequireDefault(_supportsFocusObjectSvg);

  var _canFocusObjectSwf = _interopRequireDefault(_supportsFocusObjectSwf);

  var _canFocusScrollBody = _interopRequireDefault(_supportsFocusScrollBody);

  var _canFocusScrollContainer = _interopRequireDefault(_supportsFocusScrollContainer);

  var _canFocusScrollContainerWithoutOverflow = _interopRequireDefault(_supportsFocusScrollContainerWithoutOverflow);

  var _canFocusSummary = _interopRequireDefault(_supportsFocusSummary);

  var _canFocusSvgMethod = _interopRequireDefault(_supportsSvgFocusMethod);

  var _canFocusTable = _interopRequireDefault(_supportsFocusTable);

  var _canFocusVideoWithoutControls = _interopRequireDefault(_supportsFocusVideoWithoutControls);

  module.exports = (0, _memorizeResult['default'])(function () {
    return {
      canFocusAudioWithoutControls: (0, _canFocusAudioWithoutControls['default'])(),
      canFocusChildrenOfFocusableFlexbox: (0, _canFocusChildrenOfFocusableFlexbox['default'])(),
      canFocusFieldset: (0, _canFocusFieldset['default'])(),
      canFocusImgIsmap: (0, _canFocusImgIsmap['default'])(),
      canFocusImgUsemapTabindex: (0, _canFocusImgUsemapTabindex['default'])(),
      canFocusLabelTabindex: (0, _canFocusLabelTabindex['default'])(),
      canFocusObjectSvg: (0, _canFocusObjectSvg['default'])(),
      canFocusObjectSwf: (0, _canFocusObjectSwf['default'])(),
      canFocusScrollBody: (0, _canFocusScrollBody['default'])(),
      canFocusScrollContainer: (0, _canFocusScrollContainer['default'])(),
      canFocusScrollContainerWithoutOverflow: (0, _canFocusScrollContainerWithoutOverflow['default'])(),
      canFocusSummary: (0, _canFocusSummary['default'])(),
      canFocusSvgMethod: (0, _canFocusSvgMethod['default'])(),
      canFocusTable: (0, _canFocusTable['default'])(),
      canFocusVideoWithoutControls: (0, _canFocusVideoWithoutControls['default'])()
    };
  });
});
//# sourceMappingURL=focus-relevant.supports.js.map