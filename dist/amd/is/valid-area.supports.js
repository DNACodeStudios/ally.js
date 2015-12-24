define(['exports', 'module', '../supports/memorize-result', '../supports/focus-area-img-tabindex', '../supports/focus-area-tabindex', '../supports/focus-area-without-href', '../supports/focus-broken-image-map'], function (exports, module, _supportsMemorizeResult, _supportsFocusAreaImgTabindex, _supportsFocusAreaTabindex, _supportsFocusAreaWithoutHref, _supportsFocusBrokenImageMap) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _memorizeResult = _interopRequireDefault(_supportsMemorizeResult);

  var _canFocusAreaImgTabindex = _interopRequireDefault(_supportsFocusAreaImgTabindex);

  var _canFocusAreaTabindex = _interopRequireDefault(_supportsFocusAreaTabindex);

  var _canFocusAreaWithoutHref = _interopRequireDefault(_supportsFocusAreaWithoutHref);

  var _canFocusBrokenImageMaps = _interopRequireDefault(_supportsFocusBrokenImageMap);

  module.exports = (0, _memorizeResult['default'])(function () {
    return {
      canFocusAreaImgTabindex: (0, _canFocusAreaImgTabindex['default'])(),
      canFocusAreaTabindex: (0, _canFocusAreaTabindex['default'])(),
      canFocusAreaWithoutHref: (0, _canFocusAreaWithoutHref['default'])(),
      canFocusBrokenImageMaps: (0, _canFocusBrokenImageMaps['default'])()
    };
  });
});
//# sourceMappingURL=valid-area.supports.js.map