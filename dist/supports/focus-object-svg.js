'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _platform = require('platform');

var _platform2 = _interopRequireDefault(_platform);

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

var _memorizeResult = require('./memorize-result');

var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

var _mediaSvg = require('./media/svg');

var _mediaSvg2 = _interopRequireDefault(_mediaSvg);

exports['default'] = (0, _memorizeResult2['default'])(function () {
  return (0, _detectFocus2['default'])({
    name: 'can-focus-object-svg',
    element: 'object',
    mutate: function mutate(element) {
      element.setAttribute('type', 'image/svg+xml');
      element.setAttribute('data', _mediaSvg2['default']);
      element.setAttribute('width', '200');
      element.setAttribute('height', '50');
    },
    validate: function validate(element) {
      if (_platform2['default'].name === 'Firefox') {
        // Firefox seems to be handling the object creation asynchronously and thereby produces a false negative test result.
        // Because we know Firefox is able to focus object elements referencing SVGs, we simply cheat by sniffing the user agent string
        return true;
      }

      return document.activeElement === element;
    }
  });
});
module.exports = exports['default'];
//# sourceMappingURL=focus-object-svg.js.map