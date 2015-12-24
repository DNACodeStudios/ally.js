
// sorts a list of elements according to their order in the DOM

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function compareDomPosition(a, b) {
  return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}

exports["default"] = function (elements) {
  return elements.sort(compareDomPosition);
};

module.exports = exports["default"];
//# sourceMappingURL=sort-dom-order.js.map