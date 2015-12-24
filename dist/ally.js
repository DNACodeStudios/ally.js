
// this builds up the UMD bundle

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _element_element = require('./element/_element');

var _element_element2 = _interopRequireDefault(_element_element);

var _event_event = require('./event/_event');

var _event_event2 = _interopRequireDefault(_event_event);

var _fix_fix = require('./fix/_fix');

var _fix_fix2 = _interopRequireDefault(_fix_fix);

var _get_get = require('./get/_get');

var _get_get2 = _interopRequireDefault(_get_get);

var _is_is = require('./is/_is');

var _is_is2 = _interopRequireDefault(_is_is);

var _maintain_maintain = require('./maintain/_maintain');

var _maintain_maintain2 = _interopRequireDefault(_maintain_maintain);

var _map_map = require('./map/_map');

var _map_map2 = _interopRequireDefault(_map_map);

var _observe_observe = require('./observe/_observe');

var _observe_observe2 = _interopRequireDefault(_observe_observe);

var _query_query = require('./query/_query');

var _query_query2 = _interopRequireDefault(_query_query);

var _style_style = require('./style/_style');

var _style_style2 = _interopRequireDefault(_style_style);

var _when_when = require('./when/_when');

var _when_when2 = _interopRequireDefault(_when_when);

var _version = require('./version');

var _version2 = _interopRequireDefault(_version);

// save current window.ally for noConflict()
var conflicted = typeof window !== 'undefined' && window.ally;

exports['default'] = {
  element: _element_element2['default'],
  event: _event_event2['default'],
  fix: _fix_fix2['default'],
  get: _get_get2['default'],
  is: _is_is2['default'],
  maintain: _maintain_maintain2['default'],
  map: _map_map2['default'],
  observe: _observe_observe2['default'],
  query: _query_query2['default'],
  style: _style_style2['default'],
  when: _when_when2['default'],
  version: _version2['default'],
  noConflict: function noConflict() {
    if (typeof window !== 'undefined' && window.ally === this) {
      window.ally = conflicted;
    }

    return this;
  }
};
module.exports = exports['default'];
//# sourceMappingURL=ally.js.map