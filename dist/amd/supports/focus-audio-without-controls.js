define(['exports', 'module', './detect-focus', './memorize-result', './media/mp3'], function (exports, module, _detectFocus, _memorizeResult, _mediaMp3) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  var _mp3 = _interopRequireDefault(_mediaMp3);

  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'can-focus-audio-without-controls',
      element: 'audio',
      mutate: function mutate(element) {
        // invalid media file can trigger warning in console, data-uri to prevent HTTP request
        element.setAttribute('src', _mp3['default']);
      }
    });
  });
});
//# sourceMappingURL=focus-audio-without-controls.js.map