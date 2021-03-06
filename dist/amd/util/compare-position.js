define(['exports'], function (exports) {
  // Node.compareDocumentPosition is available since IE9
  // see https://developer.mozilla.org/en-US/docs/Web/API/Node.compareDocumentPosition

  // callback returns true when element is contained by parent or is the parent suited for use with Array.some()
  /*
    USAGE:
      var isChildOf = getParentComparator({parent: someNode});
      listOfElements.some(isChildOf)
  */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.getParentComparator = getParentComparator;

  function getParentComparator(_ref) {
    var parent = _ref.parent;
    var element = _ref.element;
    var includeSelf = _ref.includeSelf;

    if (parent) {
      return function isChildOf(node) {
        return includeSelf && node === parent || parent.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY;
      };
    } else if (element) {
      return function isParentOf(node) {
        return includeSelf && element === node || node.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_CONTAINED_BY;
      };
    }

    throw new TypeError('util/compare-position#getParentComparator required either options.parent or options.element');
  }
});
//# sourceMappingURL=compare-position.js.map