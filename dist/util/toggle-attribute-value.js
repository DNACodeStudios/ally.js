
// helper to turn
//  <div some-attribute="original">
// into
//  <div some-attribute="new" data-cached-some-attribute="original">
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (_ref) {
  var // and back

  element = _ref.element;
  var attribute = _ref.attribute;
  var temporaryValue = _ref.temporaryValue;
  var saveValue = _ref.saveValue;

  var temporaryAttribute = 'data-cached-' + attribute;

  if (temporaryValue !== undefined) {
    var _value = saveValue || element.getAttribute(attribute);
    element.setAttribute(temporaryAttribute, _value || '');
    element.setAttribute(attribute, temporaryValue);
  } else {
    var _value = element.getAttribute(temporaryAttribute);
    element.removeAttribute(temporaryAttribute);
    if (_value === '') {
      element.removeAttribute(attribute);
    } else {
      element.setAttribute(attribute, _value);
    }
  }
};

module.exports = exports['default'];
//# sourceMappingURL=toggle-attribute-value.js.map