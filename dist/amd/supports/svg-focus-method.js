define(['exports', 'module'], function (exports, module) {
  'use strict';

  function getFunctionName(func) {
    var s = String(func).match(/function\s+([^\(]+)\(/);
    return s && s[1] || null;
  }

  var result = typeof Element !== 'undefined' && (function () {
    // in Chrome < 47 the focus method lived on Element, instead of HTMLElement
    var hasElementFocus = Boolean(Element.prototype.focus);
    // in Chrome >= 47 HTMLElement.focus and SVGElement.focus different functions
    // src/prototype/svgelement.prototype.focus.js clones HTMLElement.focus to SVGElement.focus
    var hasNativeSvgFocus = SVGElement.prototype.focus !== HTMLElement.prototype.focus
    // src/prototype/svgelement.prototype.focus.js adds a safety-filler for Firefox
     && getFunctionName(SVGElement.prototype.focus) === 'focus';

    return hasElementFocus || hasNativeSvgFocus;
  })();

  module.exports = function () {
    return result;
  };
});
//# sourceMappingURL=svg-focus-method.js.map