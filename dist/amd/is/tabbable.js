define(['exports', 'module', 'platform', '../util/tabindex-value', './is.util'], function (exports, module, _platform, _utilTabindexValue, _isUtil) {
  // determine if an element can be focused by keyboard (i.e. is part of the document's sequential focus navigation order)

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _platform2 = _interopRequireDefault(_platform);

  var _tabindexValue = _interopRequireDefault(_utilTabindexValue);

  // Internet Explorer 11 considers fieldset, table, td focusable, but not tabbable
  // Internet Explorer 11 considers body to have [tabindex=0], but does not allow tabbing to it
  var focusableElementsPattern = /^(fieldset|table|td|body)$/;

  module.exports = function (element) {
    if (element === document) {
      element = document.documentElement;
    }

    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError('is/tabbable requires an argument of type Element');
    }

    if (_platform2['default'].name === 'Chrome Mobile' && parseFloat(_platform2['default'].version) > 42 && _platform2['default'].os.family === 'Android') {
      // External keyboard support worked fine in CHrome 42, but stopped working in Chrome 45.
      // The on-screen keyboard does not provide a way to focus the next input element (like iOS does).
      // That leaves us with no option to advance focus by keyboard, ergo nothing is tabbable (keyboard focusable).
      return false;
    }

    var nodeName = element.nodeName.toLowerCase();
    var _tabindex = (0, _tabindexValue['default'])(element);
    var tabindex = _tabindex === null ? null : _tabindex >= 0;

    // NOTE: Firefox 31 considers [contenteditable] to have [tabindex=-1], but allows tabbing to it
    // fixed in Firefox 40 the latest - https://bugzilla.mozilla.org/show_bug.cgi?id=1185657
    if (element.hasAttribute('contenteditable')) {
      // tabbing can still be disabled by explicitly providing [tabindex="-1"]
      return tabindex !== false;
    }

    if (focusableElementsPattern.test(nodeName) && tabindex !== true) {
      return false;
    }

    // in Trident and Gecko SVGElement does not know about the tabIndex property
    if (element.tabIndex === undefined) {
      return false;
    }

    if (nodeName === 'audio') {
      if (!element.hasAttribute('controls')) {
        // In Internet Explorer the <audio> element is focusable, but not tabbable, and tabIndex property is wrong
        return false;
      } else if (_platform2['default'].name === 'Chrome' || _platform2['default'].name === 'Chrome Mobile') {
        // In Chrome <audio controls tabindex="-1"> remains keyboard focusable
        return true;
      }
    }

    if (nodeName === 'video') {
      if (!element.hasAttribute('controls')) {
        if (_platform2['default'].name === 'IE') {
          // In Internet Explorer the <video> element is focusable, but not tabbable, and tabIndex property is wrong
          return false;
        }
      } else if (_platform2['default'].name === 'Chrome' || _platform2['default'].name === 'Firefox') {
        // In Chrome and Firefox <video controls tabindex="-1"> remains keyboard focusable
        return true;
      }
    }

    if (nodeName === 'object') {
      if (_platform2['default'].layout === 'Blink' || _platform2['default'].layout === 'WebKit') {
        // In all Blink and WebKit based browsers <embed> and <object> are never keyboard focusable, even with tabindex="0" set
        return false;
      }
    }

    if (_platform2['default'].name === 'Safari' && parseFloat(_platform2['default'].version) < 10 && _platform2['default'].os.family === 'iOS') {
      // iOS 8 only considers a hand full of elements tabbable (keyboard focusable)
      // this holds true even with external keyboards
      var potentiallyTabbable = nodeName === 'input' && element.type === 'text' || element.type === 'password' || nodeName === 'select' || nodeName === 'textarea' || element.hasAttribute('contenteditable');

      if (!potentiallyTabbable) {
        var style = window.getComputedStyle(element, null);
        potentiallyTabbable = (0, _isUtil.isUserModifyWritable)(style);
      }

      if (!potentiallyTabbable) {
        return false;
      }
    }

    if (_platform2['default'].name === 'Firefox') {
      // Firefox considers scrollable containers keyboard focusable,
      // even though their tabIndex property is -1
      var style = window.getComputedStyle(element, null);
      if ((0, _isUtil.hasCssOverflowScroll)(style)) {
        // value of tabindex takes precedence
        return tabindex !== false;
      }
    }

    if (_platform2['default'].name === 'IE') {
      // IE degrades <area> to script focusable, if the image
      // using the <map> has been given tabindex="-1"
      if (nodeName === 'area') {
        var img = (0, _isUtil.getImageOfArea)(element);
        if (img && (0, _tabindexValue['default'])(img) < 0) {
          return false;
        }
      }

      var style = window.getComputedStyle(element, null);
      if ((0, _isUtil.isUserModifyWritable)(style)) {
        // prevent being swallowed by the overzealous isScrollableContainer() below
        return element.tabIndex >= 0;
      }

      // IE considers scrollable containers script focusable only,
      // even though their tabIndex property is 0
      if ((0, _isUtil.isScrollableContainer)(element, nodeName)) {
        return false;
      }

      var _parent = element.parentNode;
      // IE considers scrollable bodies script focusable only,
      if ((0, _isUtil.isScrollableContainer)(_parent, nodeName)) {
        return false;
      }

      // Children of focusable elements with display:flex are focusable in IE10-11,
      // even though their tabIndex property suggests otherwise
      var parentStyle = window.getComputedStyle(_parent, null);
      if (parentStyle.display.indexOf('flex') > -1) {
        return false;
      }
    }

    // http://www.w3.org/WAI/PF/aria-practices/#focus_tabindex
    return element.tabIndex >= 0;
  };
});
//# sourceMappingURL=tabbable.js.map