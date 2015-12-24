'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

var _memorizeResult = require('./memorize-result');

var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

var _mediaMp3 = require('./media/mp3');

var _mediaMp32 = _interopRequireDefault(_mediaMp3);

exports['default'] = (0, _memorizeResult2['default'])(function () {
  return (0, _detectFocus2['default'])({
    name: 'can-focus-audio-without-controls',
    element: 'audio',
    mutate: function mutate(element) {
      // invalid media file can trigger warning in console, data-uri to prevent HTTP request
      element.setAttribute('src', _mediaMp32['default']);
    }
  });
});
module.exports = exports['default'];
//# sourceMappingURL=focus-audio-without-controls.js.map