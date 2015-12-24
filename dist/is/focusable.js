
// determine if an element can be focused

// http://www.w3.org/TR/html5/editing.html#focus-management

// NOTE: The following known issues exist:
//   Gecko: `svg a[xlink|href]` is not identified as focusable (because SVGElement.prototype.focus is missing)
//   Blink, WebKit: SVGElements that have been made focusable by adding a focus event listener are not identified as focusable

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _focusRelevant = require('./focus-relevant');

var _focusRelevant2 = _interopRequireDefault(_focusRelevant);

var _visible = require('./visible');

var _visible2 = _interopRequireDefault(_visible);

var _disabled = require('./disabled');

var _disabled2 = _interopRequireDefault(_disabled);

var _onlyTabbable = require('./only-tabbable');

var _onlyTabbable2 = _interopRequireDefault(_onlyTabbable);

function isOnlyFocusRelevant(element) {
  var nodeName = element.nodeName.toLowerCase();
  if (nodeName === 'embed' || nodeName === 'keygen') {
    // embed is considered focus-relevant but not focusable
    // see https://github.com/medialize/ally.js/issues/82
    return true;
  }

  return false;
}

exports['default'] = function (element) {
  if (element === document) {
    element = document.documentElement;
  }

  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    throw new TypeError('is/focusable requires an argument of type Element');
  }

  if (!(0, _focusRelevant2['default'])(element) || isOnlyFocusRelevant(element)) {
    return false;
  }

  if ((0, _disabled2['default'])(element)) {
    return false;
  }

  if ((0, _onlyTabbable2['default'])(element)) {
    // some elements may be keyboard focusable, but not script focusable
    return false;
  }

  // elements that are not rendered, cannot be focused
  if (!(0, _visible2['default'])(element)) {
    return false;
  }

  return true;
};

module.exports = exports['default'];
//# sourceMappingURL=focusable.js.map