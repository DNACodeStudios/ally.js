'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _detectFocus = require('./detect-focus');

var _detectFocus2 = _interopRequireDefault(_detectFocus);

var _memorizeResult = require('./memorize-result');

var _memorizeResult2 = _interopRequireDefault(_memorizeResult);

exports['default'] = (0, _memorizeResult2['default'])(function () {
  return (0, _detectFocus2['default'])({
    name: 'can-focus-table',
    element: 'table',
    mutate: function mutate(element) {
      // IE9 has a problem replacing TBODY contents with innerHTML.
      // http://stackoverflow.com/a/8097055/515124
      // element.innerHTML = '<tr><td>cell</td></tr>';
      var fragment = document.createDocumentFragment();
      fragment.innerHTML = '<tr><td>cell</td></tr>';
      element.appendChild(fragment);
    }
  });
});
module.exports = exports['default'];
//# sourceMappingURL=focus-table.js.map