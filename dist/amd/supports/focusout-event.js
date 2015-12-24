define(['exports', 'module', './detect-focus', './memorize-result'], function (exports, module, _detectFocus, _memorizeResult) {
  // Blink dispatches FocusEvent("focusout"), but it is not detectable through ("onfocusout" in document.body)

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _detectFocus2 = _interopRequireDefault(_detectFocus);

  var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

  var received = false;

  module.exports = (0, _memorizeResult2['default'])(function () {
    return (0, _detectFocus2['default'])({
      name: 'can-dispatch-focusout',
      element: 'input',
      mutate: function mutate(element, wrapper) {
        wrapper.appendChild(element);
        element.focus();

        var target = document.createElement('input');
        wrapper.appendChild(target);

        element.addEventListener('focusout', function () {
          received = true;
        }, true);

        return target;
      },
      validate: function validate(element) {
        return 'onfocusout' in element || received;
      }
    });
  });
});
//# sourceMappingURL=focusout-event.js.map