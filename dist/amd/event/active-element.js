define(['exports', 'module', '../prototype/window.requestanimationframe', '../prototype/window.customevent', '../util/decorate-service'], function (exports, module, _prototypeWindowRequestanimationframe, _prototypeWindowCustomevent, _utilDecorateService) {
  /*
    Debugging tool that observe changes to activeElement regardless of focus/blur events.
    This utility does *not* work with Shadow DOM.
  
    USAGE:
      engage();
      document.body.addEventListener('active-element', function(event) {
        // event.detail.focus: element that received focus
        // event.detail.blur: element that lost focus
      }, false);
  
  
    NOTE: You *can* use event-delegation on focus events by using the capture-phase:
      document.body.addEventListener('focus', function(event) {
        // event.target: element that received focus
        // event.relatedTarget: element that lost focus
      }, true);
  */

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _CustomEvent = _interopRequireDefault(_prototypeWindowCustomevent);

  var _decorateService = _interopRequireDefault(_utilDecorateService);

  var previousActiveElement = undefined;
  var raf = undefined;

  function observeActiveElement() {
    if (!document.activeElement) {
      // IE10 does not redirect focus to <body> when the activeElement is removed
      document.body.focus();
    } else if (document.activeElement !== previousActiveElement) {
      // https://developer.mozilla.org/en/docs/Web/API/CustomEvent
      var activeElementEvent = new _CustomEvent['default']('active-element', {
        bubbles: false,
        cancelable: false,
        detail: {
          focus: document.activeElement,
          blur: previousActiveElement
        }
      });

      document.dispatchEvent(activeElementEvent);
      previousActiveElement = document.activeElement;
    }

    if (raf === false) {
      return;
    }

    raf = requestAnimationFrame(observeActiveElement);
  }

  function engage() {
    raf = true;
    previousActiveElement = document.activeElement;
    observeActiveElement();
  }

  function disengage() {
    cancelAnimationFrame(raf);
    raf = false;
  }

  module.exports = (0, _decorateService['default'])({ engage: engage, disengage: disengage });
});
//# sourceMappingURL=active-element.js.map