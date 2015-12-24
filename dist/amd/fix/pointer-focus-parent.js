define(['exports', 'module', 'platform', '../get/focus-target', '../is/valid-tabindex', '../util/decorate-context'], function (exports, module, _platform, _getFocusTarget, _isValidTabindex, _utilDecorateContext) {
  /*
    Clicking on a link that has a focusable element in its ancestry [tabindex="-1"],
    can lead to that parental element gaining focus, instead of the link.
  
    Example:
      <div tabindex="-1">
        <a href="#foo">click me</a>
      </div>
  
    This (wrong) behavior was observed in Chrome 38, iOS8, Safari 6.2, WebKit r175131
    It is not a problem in Firefox 33, Internet Explorer 11, Chrome 39.
  */

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _platform2 = _interopRequireDefault(_platform);

  var _getFocusTarget2 = _interopRequireDefault(_getFocusTarget);

  var _isValidTabIndex = _interopRequireDefault(_isValidTabindex);

  var _decorateContext = _interopRequireDefault(_utilDecorateContext);

  var engage = undefined;
  var disengage = undefined;
  // This fix is only relevant to WebKit
  var relevantToCurrentBrowser = _platform2['default'].layout === 'WebKit';

  if (!relevantToCurrentBrowser) {
    engage = function () {};
  } else {
    (function () {
      // add [tabindex="0"] to the (focusable) element that is about to be clicked
      // if it does not already have an explicit tabindex (attribute).
      // By applying an explicit tabindex, WebKit will not go look for
      // the first valid tabindex in the element's parents.
      var handleBeforeFocusEvent = function handleBeforeFocusEvent(event) {
        // find the element that would receive focus
        var target = (0, _getFocusTarget2['default'])({ context: event.target });
        if (!target || target.hasAttribute('tabindex') && (0, _isValidTabIndex['default'])(target)) {
          // there's nothing to focus, or the element already has tabindex, we're good
          return;
        }

        // assign explicit tabindex, as implicit tabindex is the problem
        target.setAttribute('tabindex', 0);

        // add cleanup to the RunLoop
        (window.setImmediate || window.setTimeout)(function () {
          target.removeAttribute('tabindex');
        }, 0);
      };

      engage = function (element) {
        element.addEventListener('mousedown', handleBeforeFocusEvent, true);
        element.addEventListener('touchstart', handleBeforeFocusEvent, true);
      };

      disengage = function (element) {
        element.removeEventListener('mousedown', handleBeforeFocusEvent, true);
        element.removeEventListener('touchstart', handleBeforeFocusEvent, true);
      };
    })();
  }

  module.exports = (0, _decorateContext['default'])({ engage: engage, disengage: disengage });
});
//# sourceMappingURL=pointer-focus-parent.js.map