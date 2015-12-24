define(['exports', 'module', './detect-focus', './memorize-result'], function (exports, module, _detectFocus, _memorizeResult) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'can-focus-fieldset',
      element: 'fieldset',
      mutate: function mutate(element) {
        element.innerHTML = '<legend>legend</legend><p>content</p>';
      }
    });
  });
});
//# sourceMappingURL=focus-fieldset.js.map