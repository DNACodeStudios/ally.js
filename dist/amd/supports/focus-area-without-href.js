define(['exports', 'module', 'platform', './detect-focus', './memorize-result', './media/gif'], function (exports, module, _platform, _detectFocus, _memorizeResult, _mediaGif) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _platform2 = _interopRequireDefault(_platform);

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  var _gif = _interopRequireDefault(_mediaGif);

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'can-focus-area-without-href',
      element: 'div',
      mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-area-href-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-area-href-test" alt="" src="' + _gif['default'] + '">';

        return element.querySelector('area');
      },
      validate: function validate(element) {
        if (_platform2['default'].name === 'Firefox') {
          // fixes https://github.com/medialize/ally.js/issues/35
          // Firefox loads the DataURI asynchronously, causing a false-negative
          return true;
        }

        var focus = element.querySelector('area');
        return document.activeElement === focus;
      }
    });
  });
});
//# sourceMappingURL=focus-area-without-href.js.map