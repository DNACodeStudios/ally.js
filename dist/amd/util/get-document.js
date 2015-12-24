define(["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = function (node) {
    if (!node) {
      return document;
    }

    if (node.nodeType === Node.DOCUMENT_NODE) {
      return node;
    }

    return node.ownerDocument || document;
  };
});
//# sourceMappingURL=get-document.js.map