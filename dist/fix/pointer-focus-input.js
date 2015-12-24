/*
  Clicking on form field does not necessarily assign it focus in Safari and Firefox on Mac OS X.
  While not a browser bug, it may be considered undesired behavior.

  https://bugs.webkit.org/show_bug.cgi?id=22261
  https://bugs.webkit.org/show_bug.cgi?id=118043

  Note: This behavior can be turned off in Firefox by changing the
  option `accessibility.mouse_focuses_formcontrol` in about:config
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _platform = require('platform');

var _platform2 = _interopRequireDefault(_platform);

var _utilDecorateContext = require('../util/decorate-context');

var _utilDecorateContext2 = _interopRequireDefault(_utilDecorateContext);

var engage = undefined;
var disengage = undefined;
// This fix is only relevant to Safari and Firefox on OSX
var relevantToCurrentBrowser = _platform2['default'].os.family === 'OS X' && (_platform2['default'].layout === 'Gecko' || _platform2['default'].layout === 'WebKit');

if (!relevantToCurrentBrowser) {
  engage = function () {};
} else {
  (function () {
    var inputPattern = /^(input|button)$/;

    var handleMouseDownEvent = function handleMouseDownEvent(event) {
      if (event.defaultPrevented || !event.target.nodeName.toLowerCase().match(inputPattern)) {
        // abort if the mousedown event was cancelled
        return;
      }

      // we need to set focus AFTER the mousedown finished, otherwise WebKit will ignore the call
      (window.setImmediate || window.setTimeout)(function () {
        event.target.focus();
      });
    };

    var handleMouseUpEvent = function handleMouseUpEvent(event) {
      if (event.defaultPrevented || event.target.nodeName.toLowerCase() !== 'label') {
        // abort if the mouseup event was cancelled
        return;
      }

      // <label> will redirect focus to the appropriate input element on its own
      event.target.focus();
    };

    engage = function (element) {
      element.addEventListener('mousedown', handleMouseDownEvent, false);
      // <label> elements redirect focus upon mouseup, not mousedown
      element.addEventListener('mouseup', handleMouseUpEvent, false);
    };

    disengage = function (element) {
      element.removeEventListener('mousedown', handleMouseDownEvent, false);
      element.removeEventListener('mouseup', handleMouseUpEvent, false);
    };
  })();
}

exports['default'] = (0, _utilDecorateContext2['default'])({ engage: engage, disengage: disengage });
module.exports = exports['default'];
//# sourceMappingURL=pointer-focus-input.js.map