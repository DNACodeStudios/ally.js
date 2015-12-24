
// Determine if an element is disabled (i.e. not editable)

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getParents = require('../get/parents');

var _getParents2 = _interopRequireDefault(_getParents);

var _nativeDisabledSupported = require('./native-disabled-supported');

var _nativeDisabledSupported2 = _interopRequireDefault(_nativeDisabledSupported);

function isDisabledFieldset(element) {
  var nodeName = element.nodeName.toLowerCase();
  return nodeName === 'fieldset' && element.disabled;
}

exports['default'] = function (element) {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    throw new TypeError('is/disabled requires an argument of type Element');
  }

  if (element.hasAttribute('data-ally-disabled')) {
    // treat ally's element/disabled like the DOM native element.disabled
    return true;
  }

  if (!(0, _nativeDisabledSupported2['default'])(element)) {
    // non-form elements do not support the disabled attribute
    return false;
  }

  if (element.disabled) {
    // the element itself is disabled
    return true;
  }

  if ((0, _getParents2['default'])({ context: element }).some(isDisabledFieldset)) {
    // a parental <fieldset> is disabld and inherits the state onto this element
    return true;
  }

  return false;
};

module.exports = exports['default'];
//# sourceMappingURL=disabled.js.map