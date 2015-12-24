define(["exports", "module"], function (exports, module) {
  // sorts a list of elements according to their order in the DOM

  "use strict";

  function compareDomPosition(a, b) {
    return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
  }

  module.exports = function (elements) {
    return elements.sort(compareDomPosition);
  };
});
//# sourceMappingURL=sort-dom-order.js.map