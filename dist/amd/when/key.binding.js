define(['exports', 'module', '../map/keycode'], function (exports, module, _mapKeycode) {
  /*
    decodes a key binding token to a JavaScript structure
  
    returns an array of objects:
      {
        // key name translated to keyCode (possibly more than one)
        keyCodes: [<number>],
        // translated modifiers
        modifiers: {
          altKey: null,   // ignore
          ctrKey: false,  // expect not pressed
          metaKey: true,  // expect pressed
          shiftKey: true, // expect pressed
        },
        // callback that returns true if event's
        // modifier keys match the expected state
        matchModifiers: function(event){},
      }
  */

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _keycode = _interopRequireDefault(_mapKeycode);

  var modifier = {
    alt: 'altKey',
    ctrl: 'ctrlKey',
    meta: 'metaKey',
    shift: 'shiftKey'
  };

  var modifierSequence = Object.keys(modifier).map(function (name) {
    return modifier[name];
  });

  function createExpectedModifiers(ignoreModifiers) {
    var value = ignoreModifiers ? null : false;
    return {
      altKey: value,
      ctrlKey: value,
      metaKey: value,
      shiftKey: value
    };
  }

  function resolveModifiers(modifiers) {
    var ignoreModifiers = modifiers.indexOf('*') !== -1;
    var expected = createExpectedModifiers(ignoreModifiers);

    modifiers.forEach(function (token) {
      if (token === '*') {
        // we've already covered the all-in operator
        return;
      }

      // we want the modifier pressed
      var value = true;
      var operator = token.slice(0, 1);
      if (operator === '?') {
        // we don't care if the modifier is pressed
        value = null;
      } else if (operator === '!') {
        // we do not want the modifier pressed
        value = false;
      }

      if (value !== true) {
        // compensate for the modifier's operator
        token = token.slice(1);
      }

      var propertyName = modifier[token];
      if (!propertyName) {
        throw new TypeError('Unknown modifier "' + token + '"');
      }

      expected[propertyName] = value;
    });

    return expected;
  }

  function resolveKey(key) {
    var code = _keycode['default'][key] || parseInt(key, 10);
    if (!code || typeof code !== 'number' || isNaN(code)) {
      throw new TypeError('Unknown key "' + key + '"');
    }

    return [code].concat(_keycode['default']._alias[code] || []);
  }

  function matchModifiers(expected, event) {
    // returns true on match
    return !modifierSequence.some(function (prop) {
      // returns true on mismatch
      return typeof expected[prop] === 'boolean' && Boolean(event[prop]) !== expected[prop];
    });
  }

  module.exports = function (text) {
    return text.split(/\s+/).map(function (_text) {
      var tokens = _text.split('+');
      var _modifiers = resolveModifiers(tokens.slice(0, -1));
      var _keyCodes = resolveKey(tokens.slice(-1));
      return {
        keyCodes: _keyCodes,
        modifiers: _modifiers,
        matchModifiers: matchModifiers.bind(null, _modifiers)
      };
    });
  };
});
//# sourceMappingURL=key.binding.js.map