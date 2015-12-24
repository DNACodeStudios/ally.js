define(['exports', 'module', './detect-focus', './memorize-result', './media/gif'], function (exports, module, _detectFocus, _memorizeResult, _mediaGif) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  var _gif = _interopRequireDefault(_mediaGif);

  // NOTE: https://github.com/medialize/ally.js/issues/35
  // fixes https://github.com/medialize/ally.js/issues/20
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-ismap
  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'can-focus-img-ismap',
      element: 'a',
      mutate: function mutate(element) {
        element.href = '#void';
        element.innerHTML = '<img ismap src="' + _gif['default'] + '" alt="">';
        return element.querySelector('img');
      }
    });
  });
});
//# sourceMappingURL=focus-img-ismap.js.map