define(["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = function (callback) {
    var result = callback;
    return function () {
      if (result !== callback) {
        return result;
      }

      result = callback();
      return result;
    };
  };
});
//# sourceMappingURL=memorize-result.js.map