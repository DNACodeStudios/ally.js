define(['exports', 'module', './detect-focus', './memorize-result', './media/gif.invalid'], function (exports, module, _detectFocus, _memorizeResult, _mediaGifInvalid) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  var _invalidGif = _interopRequireDefault(_mediaGifInvalid);

  // NOTE: https://github.com/medialize/ally.js/issues/35
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'can-focus-broken-image-map',
      element: 'div',
      mutate: function mutate(element) {
        element.innerHTML = '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#broken-image-map-test" alt="" src="' + _invalidGif['default'] + '">';

        return element.querySelector('area');
      }
    });
  });
});
//# sourceMappingURL=focus-broken-image-map.js.map