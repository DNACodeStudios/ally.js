define(['exports', 'module', './detect-focus', './memorize-result', './media/gif'], function (exports, module, _detectFocus, _memorizeResult, _mediaGif) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  var _gif = _interopRequireDefault(_mediaGif);

  // NOTE: https://github.com/medialize/ally.js/issues/35
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'can-focus-img-usemap-tabindex',
      element: 'div',
      mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" ' + 'src="' + _gif['default'] + '">';

        return element.querySelector('img');
      }
    });
  });
});
//# sourceMappingURL=focus-img-usemap-tabindex.js.map