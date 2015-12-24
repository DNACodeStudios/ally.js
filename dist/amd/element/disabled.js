define(['exports', 'module', '../util/tabindex-value', '../is/native-disabled-supported', '../util/toggle-attribute-value'], function (exports, module, _utilTabindexValue, _isNativeDisabledSupported, _utilToggleAttributeValue) {
  /*
    Utility to make any element inert (disabled). Inert means the elements cannot be interacted
    with and they cannot be focused via script, pointer or keyboard - and thus not receive focus.
  
    Elements made inert (disabled) by this utility are given the attribute [data-ally-disabled="true"].
  
    ---------------
  
    inert attribute was [removed](https://html5.org/r/8536) [tweet by steve](https://twitter.com/stevefaulkner/status/443075900201259008)
    but definition of [inert subtrees](http://www.w3.org/html/wg/drafts/html/master/editing.html#inert-subtrees) remains.
  
    [implementation idea by Vasilis](http://codepen.io/vasilisvg/pen/scowI)
    [inert attribute polyfill by GoogleChrome](https://github.com/GoogleChrome/inert-polyfill)
  
    [Gecko Bug: Inert Attribute](https://bugzilla.mozilla.org/show_bug.cgi?id=921504)
    [Chromium Bug: Inert Attribute](https://code.google.com/p/chromium/issues/detail?id=269846)
    [Chromium Bug: Inert Subtree](https://code.google.com/p/chromium/issues/detail?id=241699)
    [WebKit Bug: Inert Subtree](https://bugs.webkit.org/show_bug.cgi?id=110952)
  */

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _tabindexValue = _interopRequireDefault(_utilTabindexValue);

  var _isNativeDisabledSupported2 = _interopRequireDefault(_isNativeDisabledSupported);

  var _toggleAttributeValue = _interopRequireDefault(_utilToggleAttributeValue);

  function disabledFocus() {
    /*eslint-disable no-console */
    console.warn('trying to focus inert element', this);
    /*eslint-enable no-console */
  }

  function disableTabindex(element, disabledState) {
    if (disabledState) {
      var tabIndex = (0, _tabindexValue['default'])(element);
      (0, _toggleAttributeValue['default'])({
        element: element,
        attribute: 'tabindex',
        temporaryValue: '-1',
        saveValue: tabIndex !== null ? tabIndex : ''
      });
    } else {
      (0, _toggleAttributeValue['default'])({
        element: element,
        attribute: 'tabindex'
      });
    }
  }

  function disableVideoControls(element, disabledState) {
    // Chrome leaves <video controls tabindex="-1"> in document focus navigation sequence
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName !== 'video' && nodeName !== 'audio') {
      return;
    }

    if (disabledState) {
      if (element.hasAttribute('controls')) {
        element.setAttribute('data-inert-controls', '');
        element.removeAttribute('controls');
      }
    } else {
      var restoreControls = element.hasAttribute('data-inert-controls');
      if (restoreControls) {
        element.removeAttribute('data-inert-controls');
        element.setAttribute('controls', '');
      }
    }
  }

  function disableSvgFocusable(element, disabledState) {
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName !== 'svg' && !element.ownerSVGElement) {
      return;
    }

    (0, _toggleAttributeValue['default'])({
      element: element,
      attribute: 'focusable',
      temporaryValue: disabledState ? 'false' : undefined
    });
  }

  function setAriaDisabled(element, disabledState) {
    (0, _toggleAttributeValue['default'])({
      element: element,
      attribute: 'aria-disabled',
      temporaryValue: disabledState ? 'true' : undefined
    });
  }

  function disableScriptFocus(element, disabledState) {
    if (disabledState) {
      // make sure no script can focus the element
      element.focus = disabledFocus;
    } else {
      // restore original focus function from prototype
      delete element.focus;
    }
  }

  function disablePointerEvents(element, disabledState) {
    if (disabledState) {
      // remember previous pointer events status so we can restore it
      var pointerEvents = element.style.pointerEvents || '';
      element.setAttribute('data-inert-pointer-events', pointerEvents);
      // make sure no pointer interaction can access the element
      element.style.pointerEvents = 'none';
    } else {
      // restore to previous pointer interaction status
      var pointerEvents = element.getAttribute('data-inert-pointer-events');
      element.removeAttribute('data-inert-pointer-events');
      element.style.pointerEvents = pointerEvents;
    }
  }

  function setElementDisabled(element, disabledState) {
    setAriaDisabled(element, disabledState);
    disableTabindex(element, disabledState);
    disableScriptFocus(element, disabledState);
    disablePointerEvents(element, disabledState);
    disableVideoControls(element, disabledState);
    disableSvgFocusable(element, disabledState);

    if (disabledState) {
      element.setAttribute('data-ally-disabled', 'true');
    } else {
      element.removeAttribute('data-ally-disabled');
    }
  }

  module.exports = function (element, disabledState) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError('element/disabled requires an argument of type Element');
    }

    // accept truthy/falsy values
    disabledState = Boolean(disabledState);
    var currentState = element.hasAttribute('data-ally-disabled');
    // if there's no value to set, we're running as a getter
    var runningAsGetter = arguments.length === 1;

    if ((0, _isNativeDisabledSupported2['default'])(element)) {
      if (runningAsGetter) {
        return element.disabled;
      }

      // form elements know the disabled attribute, which we shall use instead of our poor man's copy of it
      element.disabled = disabledState;
      return element;
    }

    if (runningAsGetter) {
      return currentState;
    }

    if (currentState === disabledState) {
      // no update necessary
      return element;
    }

    setElementDisabled(element, disabledState);
    return element;
  };
});
//# sourceMappingURL=disabled.js.map