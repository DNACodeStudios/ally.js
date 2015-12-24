"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (callback) {
  var result = callback;
  return function () {
    if (result !== callback) {
      return result;
    }

    result = callback();
    return result;
  };
};

module.exports = exports["default"];
//# sourceMappingURL=memorize-result.js.map