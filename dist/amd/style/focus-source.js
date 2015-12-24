define(['exports', 'module', 'domtokenlist-shim', '../event/shadow-focus', '../observe/interaction-type', '../util/decorate-service'], function (exports, module, _domtokenlistShim, _eventShadowFocus, _observeInteractionType, _utilDecorateService) {
  /*
    add data-focus-source attribute to html element containing "key", "pointer" or "script"
    depending on the input method used to change focus.
  
    USAGE:
      style/focus-source()
  
      body :focus {
        outline: 1px solid grey;
      }
  
      html[data-focus-source="key"] body :focus {
        outline: 5px solid red;
      }
  
      html[data-focus-source="key"] body :focus {
        outline: 1px solid blue;
      }
  
    NOTE: I don't have a GamePad to test, if you do and you want to
    implement an observer for https://w3c.github.io/gamepad/ - send a PR!
  
    Alternate implementation: https://github.com/alice/modality
  */

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _shadowFocus = _interopRequireDefault(_eventShadowFocus);

  var _engageInteractionTypeObserver = _interopRequireDefault(_observeInteractionType);

  var _decorateService = _interopRequireDefault(_utilDecorateService);

  // preferring focusin/out because they are synchronous in IE10+11
  var focusEventName = typeof document !== 'undefined' && ('onfocusin' in document ? 'focusin' : 'focus');
  var blurEventName = typeof document !== 'undefined' && ('onfocusin' in document ? 'focusout' : 'blur');

  // interface to read interaction-type-listener state
  var interactionTypeHandler = undefined;
  var shadowHandle = undefined;
  // keep track of last focus source
  var current = null;
  // overwrite focus source for use with the every upcoming focus event
  var lock = null;
  // keep track of ever having used a particular input method to change focus
  var used = {
    pointer: false,
    key: false,
    script: false,
    initial: false
  };

  function handleFocusEvent(event) {
    var source = '';
    if (event.type === focusEventName || event.type === 'shadow-focus') {
      var interactionType = interactionTypeHandler.get();
      source = lock || interactionType.pointer && 'pointer' || interactionType.key && 'key' || 'script';
    } else if (event.type === 'initial') {
      source = 'initial';
    }

    document.documentElement.setAttribute('data-focus-source', source);

    if (event.type !== blurEventName) {
      if (!used[source]) {
        document.documentElement.classList.add('focus-source-' + source);
      }

      used[source] = true;
      current = source;
    }
  }

  function getCurrentFocusSource() {
    return current;
  }

  function getUsedFocusSource(source) {
    return used[source];
  }

  function lockFocusSource(source) {
    lock = source;
  }

  function disengage() {
    // clear dom state
    handleFocusEvent({ type: blurEventName });
    current = lock = null;
    Object.keys(used).forEach(function (key) {
      document.documentElement.classList.remove('focus-source-' + key);
      used[key] = false;
    });
    // kill interaction type identification listener
    interactionTypeHandler.disengage();
    // kill shadow-focus event dispatcher
    shadowHandle && shadowHandle.disengage();
    document.removeEventListener('shadow-focus', handleFocusEvent, true);
    document.documentElement.removeEventListener(focusEventName, handleFocusEvent, true);
    document.documentElement.removeEventListener(blurEventName, handleFocusEvent, true);
    document.documentElement.removeAttribute('data-focus-source');
  }

  function engage() {
    // enable the shadow-focus event dispatcher
    shadowHandle = (0, _shadowFocus['default'])();
    // handlers to modify the focused element
    document.addEventListener('shadow-focus', handleFocusEvent, true);
    document.documentElement.addEventListener(focusEventName, handleFocusEvent, true);
    document.documentElement.addEventListener(blurEventName, handleFocusEvent, true);
    // enable the interaction type identification observer
    interactionTypeHandler = (0, _engageInteractionTypeObserver['default'])();
    // set up initial dom state
    handleFocusEvent({ type: 'initial' });

    return {
      used: getUsedFocusSource,
      current: getCurrentFocusSource,
      lock: lockFocusSource
    };
  }

  module.exports = (0, _decorateService['default'])({ engage: engage, disengage: disengage });
});
//# sourceMappingURL=focus-source.js.map