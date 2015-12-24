define(['exports', 'module', './supports-cache', './memorize-result'], function (exports, module, _supportsCache, _memorizeResult) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _cache = _interopRequireDefault(_supportsCache);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  var testName = 'supports-css-shadow-piercing-deep-combinator';

  module.exports = (0, _memorizeResult2['default'])(function () {
    var combinator = _cache['default'].get(testName);

    // see http://dev.w3.org/csswg/css-scoping-1/#deep-combinator
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1117572
    // https://code.google.com/p/chromium/issues/detail?id=446051
    try {
      document.querySelector('html >>> :first-child');
      combinator = '>>>';
    } catch (noArrowArrowArrow) {
      try {
        // old syntax supported at least up to Chrome 41
        // https://code.google.com/p/chromium/issues/detail?id=446051
        document.querySelector('html /deep/ :first-child');
        combinator = '/deep/';
      } catch (noDeep) {
        combinator = '';
      }
    }

    _cache['default'].set(testName, combinator);
    return combinator;
  });
});
//# sourceMappingURL=css-shadow-piercing-deep-combinator.js.map