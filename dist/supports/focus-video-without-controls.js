'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

var _memorizeResult = require('./memorize-result');

var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

var _mediaMp4 = require('./media/mp4');

var _mediaMp42 = _interopRequireDefault(_mediaMp4);

exports['default'] = (0, _memorizeResult2['default'])(function () {
  return (0, _detectFocus2['default'])({
    name: 'can-focus-video-without-controls',
    element: 'video',
    mutate: function mutate(element) {
      // invalid media file can trigger warning in console, data-uri to prevent HTTP request
      element.setAttribute('src', _mediaMp42['default']);
    }
  });
});
module.exports = exports['default'];
//# sourceMappingURL=focus-video-without-controls.js.map