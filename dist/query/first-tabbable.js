
/*
    query/firstTabbable() finds the first suitable element to receive focus in the given context.
    If an element has [autofocus] return that element, otherwise return the first element
    in document order that does *not* have a positive tabIndex (e.g. as [tabindex="1"]),
    otherwise return the context itself, if it is focusable.

    Note: Chrome's <dialog> will focus the first tabbable element, even if it has
    [tabindex="1"]. Since [tabindex="1"] is considered
    bad practice we'll ignore it until someone complains.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('array.prototype.findindex');

var _tabbable = require('./tabbable');

var _tabbable2 = _interopRequireDefault(_tabbable);

var _isFocusable = require('../is/focusable');

var _isFocusable2 = _interopRequireDefault(_isFocusable);

var _utilNodeArray = require('../util/node-array');

var _utilNodeArray2 = _interopRequireDefault(_utilNodeArray);

function hasAutofocus(element) {
  // [autofocus] actually only works on form element, but who cares?
  return element.hasAttribute('autofocus');
}

function hasNoPositiveTabindex(element) {
  return element.tabIndex <= 0;
}

exports['default'] = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var context = _ref.context;
  var sequence = _ref.sequence;
  var strategy = _ref.strategy;
  var ignoreAutofocus = _ref.ignoreAutofocus;
  var defaultToContext = _ref.defaultToContext;

  var index = -1;

  if (!sequence) {
    context = (0, _utilNodeArray2['default'])(context || document.body)[0];
    sequence = (0, _tabbable2['default'])({ context: context, strategy: strategy });
  }

  if (sequence.length && !ignoreAutofocus) {
    // prefer [autofocus]
    index = sequence.findIndex(hasAutofocus);
  }

  if (sequence.length && index === -1) {
    // ignore positive [tabindex]
    index = sequence.findIndex(hasNoPositiveTabindex);
  }

  if (index === -1 && defaultToContext && context && (0, _isFocusable2['default'])(context)) {
    return context;
  }

  return sequence[index] || null;
};

module.exports = exports['default'];
//# sourceMappingURL=first-tabbable.js.map