'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _supportsMemorizeResult = require('../supports/memorize-result');

var _supportsMemorizeResult2 = _interopRequireDefault(_supportsMemorizeResult);

var _supportsFocusAudioWithoutControls = require('../supports/focus-audio-without-controls');

var _supportsFocusAudioWithoutControls2 = _interopRequireDefault(_supportsFocusAudioWithoutControls);

var _supportsFocusChildrenOfFocusableFlexbox = require('../supports/focus-children-of-focusable-flexbox');

var _supportsFocusChildrenOfFocusableFlexbox2 = _interopRequireDefault(_supportsFocusChildrenOfFocusableFlexbox);

var _supportsFocusFieldset = require('../supports/focus-fieldset');

var _supportsFocusFieldset2 = _interopRequireDefault(_supportsFocusFieldset);

var _supportsFocusImgIsmap = require('../supports/focus-img-ismap');

var _supportsFocusImgIsmap2 = _interopRequireDefault(_supportsFocusImgIsmap);

var _supportsFocusImgUsemapTabindex = require('../supports/focus-img-usemap-tabindex');

var _supportsFocusImgUsemapTabindex2 = _interopRequireDefault(_supportsFocusImgUsemapTabindex);

var _supportsFocusLabelTabindex = require('../supports/focus-label-tabindex');

var _supportsFocusLabelTabindex2 = _interopRequireDefault(_supportsFocusLabelTabindex);

var _supportsFocusObjectSvg = require('../supports/focus-object-svg');

var _supportsFocusObjectSvg2 = _interopRequireDefault(_supportsFocusObjectSvg);

var _supportsFocusObjectSwf = require('../supports/focus-object-swf');

var _supportsFocusObjectSwf2 = _interopRequireDefault(_supportsFocusObjectSwf);

var _supportsFocusScrollBody = require('../supports/focus-scroll-body');

var _supportsFocusScrollBody2 = _interopRequireDefault(_supportsFocusScrollBody);

var _supportsFocusScrollContainer = require('../supports/focus-scroll-container');

var _supportsFocusScrollContainer2 = _interopRequireDefault(_supportsFocusScrollContainer);

var _supportsFocusScrollContainerWithoutOverflow = require('../supports/focus-scroll-container-without-overflow');

var _supportsFocusScrollContainerWithoutOverflow2 = _interopRequireDefault(_supportsFocusScrollContainerWithoutOverflow);

var _supportsFocusSummary = require('../supports/focus-summary');

var _supportsFocusSummary2 = _interopRequireDefault(_supportsFocusSummary);

var _supportsSvgFocusMethod = require('../supports/svg-focus-method');

var _supportsSvgFocusMethod2 = _interopRequireDefault(_supportsSvgFocusMethod);

var _supportsFocusTable = require('../supports/focus-table');

var _supportsFocusTable2 = _interopRequireDefault(_supportsFocusTable);

var _supportsFocusVideoWithoutControls = require('../supports/focus-video-without-controls');

var _supportsFocusVideoWithoutControls2 = _interopRequireDefault(_supportsFocusVideoWithoutControls);

exports['default'] = (0, _supportsMemorizeResult2['default'])(function () {
  return {
    canFocusAudioWithoutControls: (0, _supportsFocusAudioWithoutControls2['default'])(),
    canFocusChildrenOfFocusableFlexbox: (0, _supportsFocusChildrenOfFocusableFlexbox2['default'])(),
    canFocusFieldset: (0, _supportsFocusFieldset2['default'])(),
    canFocusImgIsmap: (0, _supportsFocusImgIsmap2['default'])(),
    canFocusImgUsemapTabindex: (0, _supportsFocusImgUsemapTabindex2['default'])(),
    canFocusLabelTabindex: (0, _supportsFocusLabelTabindex2['default'])(),
    canFocusObjectSvg: (0, _supportsFocusObjectSvg2['default'])(),
    canFocusObjectSwf: (0, _supportsFocusObjectSwf2['default'])(),
    canFocusScrollBody: (0, _supportsFocusScrollBody2['default'])(),
    canFocusScrollContainer: (0, _supportsFocusScrollContainer2['default'])(),
    canFocusScrollContainerWithoutOverflow: (0, _supportsFocusScrollContainerWithoutOverflow2['default'])(),
    canFocusSummary: (0, _supportsFocusSummary2['default'])(),
    canFocusSvgMethod: (0, _supportsSvgFocusMethod2['default'])(),
    canFocusTable: (0, _supportsFocusTable2['default'])(),
    canFocusVideoWithoutControls: (0, _supportsFocusVideoWithoutControls2['default'])()
  };
});
module.exports = exports['default'];
//# sourceMappingURL=focus-relevant.supports.js.map