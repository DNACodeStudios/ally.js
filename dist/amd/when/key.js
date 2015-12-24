define(['exports', 'module', './key.binding', '../util/node-array', '../util/compare-position'], function (exports, module, _keyBinding, _utilNodeArray, _utilComparePosition) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _keyBinding2 = _interopRequireDefault(_keyBinding);

  var _nodeArray = _interopRequireDefault(_utilNodeArray);

  // Bug 286933 - Key events in the autocomplete popup should be hidden from page scripts

  module.exports = function () {
    var map = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var disengage = undefined;
    var bindings = {};

    var context = (0, _nodeArray['default'])(map.context)[0] || document.documentElement;
    delete map.context;
    var filter = (0, _nodeArray['default'])(map.filter);
    delete map.filter;

    var mapKeys = Object.keys(map);
    if (!mapKeys.length) {
      throw new TypeError('when/key requires at least one option key');
    }

    var registerBinding = function registerBinding(event) {
      event.keyCodes.forEach(function (code) {
        if (!bindings[code]) {
          bindings[code] = [];
        }

        bindings[code].push(event);
      });
    };

    mapKeys.forEach(function (text) {
      if (typeof map[text] !== 'function') {
        throw new TypeError('when/key requires option["' + text + '"] to be a function');
      }

      var addCallback = function addCallback(event) {
        event.callback = map[text];
        return event;
      };

      (0, _keyBinding2['default'])(text).map(addCallback).forEach(registerBinding);
    });

    var handleKeyDown = function handleKeyDown(event) {
      if (event.defaultPrevented) {
        return;
      }

      if (filter.length) {
        // ignore elements within the exempted sub-trees
        var isParentOfElement = (0, _utilComparePosition.getParentComparator)({ element: event.target, includeSelf: true });
        if (filter.some(isParentOfElement)) {
          return;
        }
      }

      var key = event.keyCode || event.which;
      if (!bindings[key]) {
        return;
      }

      bindings[key].forEach(function (_event) {
        if (!_event.matchModifiers(event)) {
          return;
        }

        _event.callback.call(context, event, disengage);
      });
    };

    context.addEventListener('keydown', handleKeyDown, false);

    disengage = function () {
      context.removeEventListener('keydown', handleKeyDown, false);
    };

    return { disengage: disengage };
  };
});
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=286933
//# sourceMappingURL=key.js.map