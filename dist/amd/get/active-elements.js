define(['exports', 'module', '../is/shadowed', './shadow-host-parents'], function (exports, module, _isShadowed, _shadowHostParents) {
  // [0] always is the actual active element (even within web-components)
  // [0+n] is the hierarchy of shadow-doms with [length -1] being the top most shadow-host

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isShadowed2 = _interopRequireDefault(_isShadowed);

  var _getShadowHostParents = _interopRequireDefault(_shadowHostParents);

  function walkToShadowedElement() {
    var list = [document.activeElement];

    while (list[0] && list[0].shadowRoot) {
      list.unshift(list[0].shadowRoot.activeElement);
    }

    return list;
  }

  function walkFromShadowedElement() {
    var hosts = (0, _getShadowHostParents['default'])({ context: document.activeElement });
    return [document.activeElement].concat(hosts);
  }

  module.exports = function () {
    if (document.activeElement === null) {
      // IE10 does not redirect focus to <body> when the activeElement is removed
      document.body.focus();
    }

    // Firefox currently leaks the shadowed element
    // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1117535
    if ((0, _isShadowed2['default'])(document.activeElement)) {
      return walkFromShadowedElement();
    }

    return walkToShadowedElement();
  };
});
//# sourceMappingURL=active-elements.js.map