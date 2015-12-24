define(['exports', 'module', 'array.prototype.findindex', '../get/parents'], function (exports, module, _arrayPrototypeFindindex, _getParents) {
  // determine if an element is rendered
  // NOTE: that does not mean an element is visible in the viewport, see util/visible-area

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _getParents2 = _interopRequireDefault(_getParents);

  // http://www.w3.org/TR/html5/rendering.html#being-rendered
  // <area> is not rendered, but we *consider* it visible to simplfiy this function's usage
  var notRenderedElementsPattern = /^(area)$/;

  function computedStyle(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
  }

  function notDisplayed(_path) {
    return _path.some(function (element) {
      // display:none is not visible (optimized away at layout)
      return computedStyle(element, 'display') === 'none';
    });
  }

  function notVisible(_path) {
    // https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L109-L114
    // NOTE: a nested element can reverse visibility:hidden|collapse by explicitly setting visibility:visible
    // NOTE: visibility can be ["", "visible", "hidden", "collapse"]
    var hidden = _path.findIndex(function (element) {
      var visibility = computedStyle(element, 'visibility');
      return visibility === 'hidden' || visibility === 'collapse';
    });

    if (hidden === -1) {
      // there is no hidden element
      return false;
    }

    var visible = _path.findIndex(function (element) {
      return computedStyle(element, 'visibility') === 'visible';
    });

    if (visible === -1) {
      // there is no visible element (but a hidden element)
      return true;
    }

    if (hidden < visible) {
      // there is a hidden element and it's closer than the first visible element
      return true;
    }

    // there may be a hidden element, but the closest element is visible
    return false;
  }

  function collapsedParent(_path) {
    var offset = 1;
    if (_path[0].nodeName.toLowerCase() === 'summary') {
      offset = 2;
    }

    return _path.slice(offset).some(function (element) {
      // "content children" of a closed details element are not visible
      return element.nodeName.toLowerCase() === 'details' && element.open === false;
    });
  }

  module.exports = function (element) {
    if (element === document) {
      element = document.documentElement;
    }

    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError('is/visible requires an argument of type Element');
    }

    var nodeName = element.nodeName.toLowerCase();
    if (notRenderedElementsPattern.test(nodeName)) {
      return true;
    }

    var _path = (0, _getParents2['default'])({ context: element });

    // in Internet Explorer <audio> has a default display: none, where others have display: inline
    // but IE allows focusing <audio style="display:none">, but not <div display:none><audio>
    // this is irrelevant to other browsers, as the controls attribute is required to make <audio> focusable
    var isAudioWithoutControls = nodeName === 'audio' && !element.hasAttribute('controls');
    if (notDisplayed(isAudioWithoutControls ? _path.slice(1) : _path)) {
      return false;
    }

    if (notVisible(_path)) {
      return false;
    }

    if (collapsedParent(_path)) {
      return false;
    }

    return true;
  };
});
//# sourceMappingURL=visible.js.map