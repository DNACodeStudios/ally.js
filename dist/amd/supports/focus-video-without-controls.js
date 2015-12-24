define(['exports', 'module', './detect-focus', './memorize-result', './media/mp4'], function (exports, module, _detectFocus, _memorizeResult, _mediaMp4) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  var _mp4 = _interopRequireDefault(_mediaMp4);

  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'can-focus-video-without-controls',
      element: 'video',
      mutate: function mutate(element) {
        // invalid media file can trigger warning in console, data-uri to prevent HTTP request
        element.setAttribute('src', _mp4['default']);
      }
    });
  });
});
//# sourceMappingURL=focus-video-without-controls.js.map