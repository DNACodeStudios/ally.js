define(['exports', 'module', './element/_element', './event/_event', './fix/_fix', './get/_get', './is/_is', './maintain/_maintain', './map/_map', './observe/_observe', './query/_query', './style/_style', './when/_when', './version'], function (exports, module, _element_element, _event_event, _fix_fix, _get_get, _is_is, _maintain_maintain, _map_map, _observe_observe, _query_query, _style_style, _when_when, _version) {
  // this builds up the UMD bundle

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _element = _interopRequireDefault(_element_element);

  var _event = _interopRequireDefault(_event_event);

  var _fix = _interopRequireDefault(_fix_fix);

  var _get = _interopRequireDefault(_get_get);

  var _is = _interopRequireDefault(_is_is);

  var _maintain = _interopRequireDefault(_maintain_maintain);

  var _map = _interopRequireDefault(_map_map);

  var _observe = _interopRequireDefault(_observe_observe);

  var _query = _interopRequireDefault(_query_query);

  var _style = _interopRequireDefault(_style_style);

  var _when = _interopRequireDefault(_when_when);

  var _version2 = _interopRequireDefault(_version);

  // save current window.ally for noConflict()
  var conflicted = typeof window !== 'undefined' && window.ally;

  module.exports = {
    element: _element['default'],
    event: _event['default'],
    fix: _fix['default'],
    get: _get['default'],
    is: _is['default'],
    maintain: _maintain['default'],
    map: _map['default'],
    observe: _observe['default'],
    query: _query['default'],
    style: _style['default'],
    when: _when['default'],
    version: _version2['default'],
    noConflict: function noConflict() {
      if (typeof window !== 'undefined' && window.ally === this) {
        window.ally = conflicted;
      }

      return this;
    }
  };
});
//# sourceMappingURL=ally.js.map