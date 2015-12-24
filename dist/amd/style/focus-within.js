define(['exports', 'module', 'domtokenlist-shim', '../event/shadow-focus', '../get/active-elements', '../get/parents', '../util/decorate-service', './focus-within.supports'], function (exports, module, _domtokenlistShim, _eventShadowFocus, _getActiveElements, _getParents, _utilDecorateService, _focusWithinSupports) {
  /*
    add .ally-focus-within class to parents of document.activeElement,
    to provide the functionality of :focus-within where it's not available
    see http://dev.w3.org/csswg/selectors-4/#the-focus-within-pseudo
  
    USAGE:
      style/focus-within()
  */

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _shadowFocus = _interopRequireDefault(_eventShadowFocus);

  var _getActiveElements2 = _interopRequireDefault(_getActiveElements);

  var _getParents2 = _interopRequireDefault(_getParents);

  var _decorateService = _interopRequireDefault(_utilDecorateService);

  var _supports2 = _interopRequireDefault(_focusWithinSupports);

  var supports = undefined;

  // preferring focusin/out because they are synchronous in IE10+11
  var focusEventName = typeof document !== 'undefined' && ('onfocusin' in document ? 'focusin' : 'focus');
  var blurEventName = typeof document !== 'undefined' && ('onfocusin' in document ? 'focusout' : 'blur');

  // NOTE: require classList polyfill may be necessary (not available on SVGElement)
  // http://caniuse.com/#feat=classlist available since IE10
  // https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills#classlist
  // https://developer.mozilla.org/en-US/docs/Web/API/Element.classList

  var className = 'ally-focus-within';
  var blurTimer = undefined;
  var shadowHandle = undefined;

  function applyFocusWithinClass(active) {
    var _active = active || (0, _getActiveElements2['default'])();
    var selector = '.' + className;
    if (supports.cssShadowPiercingDeepCombinator) {
      // select elements in shadow dom as well
      selector += ', html ' + supports.cssShadowPiercingDeepCombinator + ' ' + selector;
    } else {
      // no shadow-piercing descendant selector, no joy
      _active = _active.slice(-1);
    }

    // identify the elements that currently have :focus-within
    var _current = [].slice.call(document.querySelectorAll(selector), 0);
    // get the path (ancestry) of each ShadowRoot and merge them into a flat list
    var elements = _active.map(function (context) {
      return (0, _getParents2['default'])({ context: context });
    }).reduce(function (previous, current) {
      return current.concat(previous);
    }, []);

    // remove the class only from elements that would not receive it again (minimize dom action)
    _current.forEach(function (element) {
      if (elements.indexOf(element) !== -1) {
        return;
      }

      element.classList.remove(className);
    });

    // apply the class only to elements that do not yet have it (minimize dom action)
    elements.forEach(function (element) {
      if (_current.indexOf(element) !== -1) {
        return;
      }

      element.classList.add(className);
    });
  }

  function handleDocumentBlurEvent() {
    // we won't get a focus for <body>, but a delayed blur handler will achieve
    // the same thing listening for focus would've done, unless we get a focus, of course
    blurTimer = (window.setImmediate || window.setTimeout)(function () {
      applyFocusWithinClass();
    });
  }

  function handleDocumentFocusEvent() {
    // abort any handlers that come from document or element blur handlers
    (window.clearImmediate || window.clearTimeout)(blurTimer);
    // NOTE: we could overcome Firefox 34 issue of not supporting ShadowRoot.host by
    // passing event.target (which references the first-level ShadowHost), but that
    // would require applyFocusWithinClass() to distinguish between the argument and
    // getActiveElements().
    applyFocusWithinClass();
  }

  function handleShadowFocusEvent(event) {
    applyFocusWithinClass(event.detail.elements);
  }

  function disengage() {
    shadowHandle && shadowHandle.disengage();
    (window.clearImmediate || window.clearTimeout)(blurTimer);
    document.removeEventListener(blurEventName, handleDocumentBlurEvent, true);
    document.removeEventListener(focusEventName, handleDocumentFocusEvent, true);
    document.removeEventListener('shadow-focus', handleShadowFocusEvent, true);

    var selector = '.' + className;
    if (supports.cssShadowPiercingDeepCombinator) {
      // select elements in shadow dom as well
      selector += ', html ' + supports.cssShadowPiercingDeepCombinator + ' ' + selector;
    }

    // remove any remaining ally-within-focus occurrences
    [].forEach.call(document.querySelectorAll(selector), function (element) {
      element.classList.remove(className);
    });
  }

  function engage() {
    if (!supports) {
      supports = (0, _supports2['default'])();
    }

    shadowHandle = (0, _shadowFocus['default'])();
    document.addEventListener(blurEventName, handleDocumentBlurEvent, true);
    document.addEventListener(focusEventName, handleDocumentFocusEvent, true);
    document.addEventListener('shadow-focus', handleShadowFocusEvent, true);
    applyFocusWithinClass();
  }

  module.exports = (0, _decorateService['default'])({ engage: engage, disengage: disengage });
});
//# sourceMappingURL=focus-within.js.map