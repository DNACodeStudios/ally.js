define(['exports', 'css.escape', '../util/get-document'], function (exports, _cssEscape, _utilGetDocument) {
  // this is a shared utility file for focus-relevant.js and tabbable.js
  // separate testing of this file's functions is not necessary,
  // as they're implicitly tested by way of the consumers

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.isUserModifyWritable = isUserModifyWritable;
  exports.hasCssOverflowScroll = hasCssOverflowScroll;
  exports.isScrollableContainer = isScrollableContainer;
  exports.getImageOfArea = getImageOfArea;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _cssEscape2 = _interopRequireDefault(_cssEscape);

  var _getDocument = _interopRequireDefault(_utilGetDocument);

  function isUserModifyWritable(style) {
    // http://www.w3.org/TR/1999/WD-css3-userint-19990916#user-modify
    // https://github.com/medialize/ally.js/issues/17
    var userModify = style.webkitUserModify || '';
    return Boolean(userModify && userModify.indexOf('write') !== -1);
  }

  function hasCssOverflowScroll(style) {
    return [style.getPropertyValue('overflow'), style.getPropertyValue('overflow-x'), style.getPropertyValue('overflow-y')].some(function (overflow) {
      return overflow === 'auto' || overflow === 'scroll';
    });
  }

  function isScrollableContainer(element, nodeName) {
    if (nodeName !== 'div' && nodeName !== 'span') {
      // Internet Explorer advances scrollable containers and bodies to focusable
      // only if the scrollable container is <div> or <span> - this does *not*
      // happen for <section>, <article>, …
      return false;
    }

    return element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth;
  }

  function getImageOfArea(element) {
    var map = element.parentElement;

    if (!map.name || map.nodeName.toLowerCase() !== 'map') {
      return null;
    }

    // NOTE: image maps can also be applied to <object> with image content,
    // but no browser supports this at the moment

    // HTML5 specifies HTMLMapElement.images to be an HTMLCollection of all
    // <img> and <object> referencing the <map> element, but no browser implements this
    //   http://www.w3.org/TR/html5/embedded-content-0.html#the-map-element
    //   https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement
    // the image must be valid and loaded for the map to take effect
    var _document = (0, _getDocument['default'])(element);
    return _document.querySelector('img[usemap="#' + (0, _cssEscape2['default'])(map.name) + '"]') || null;
  }
});
//# sourceMappingURL=is.util.js.map