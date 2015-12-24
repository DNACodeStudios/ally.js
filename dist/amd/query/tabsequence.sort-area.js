define(['exports', 'module', 'css.escape', 'array.prototype.findindex', './tabbable', '../util/merge-dom-order', '../util/get-document'], function (exports, module, _cssEscape, _arrayPrototypeFindindex, _tabbable, _utilMergeDomOrder, _utilGetDocument) {
  // move <area> elements to the location of the <img> elements that reference them

  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _cssEscape2 = _interopRequireDefault(_cssEscape);

  var _queryTabbable = _interopRequireDefault(_tabbable);

  var _mergeInDomOrder = _interopRequireDefault(_utilMergeDomOrder);

  var _getDocument = _interopRequireDefault(_utilGetDocument);

  var Maps = (function () {
    function Maps(context) {
      _classCallCheck(this, Maps);

      this._document = (0, _getDocument['default'])(context);
      this.maps = {};
    }

    _createClass(Maps, [{
      key: 'getAreasFor',
      value: function getAreasFor(name) {
        if (!this.maps[name]) {
          // the map is not defined within the context, so we
          // have to go find it elsewhere in the document
          this.addMapByName(name);
        }

        return this.maps[name];
      }
    }, {
      key: 'addMapByName',
      value: function addMapByName(name) {
        // apparently getElementsByName() also considers id attribute in IE & opera
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName
        var map = this._document.querySelector('map[name="' + (0, _cssEscape2['default'])(name) + '"]') || null;
        if (!map) {
          // if there is no map, the img[usemap] wasn't doing anything anyway
          return;
        }

        this.maps[map.name] = (0, _queryTabbable['default'])({ context: map });
      }
    }, {
      key: 'extractAreasFromList',
      value: function extractAreasFromList(elements) {
        // remove all <area> elements from the elements list,
        // but put them the map for later retrieval
        return elements.filter(function (element) {
          var nodeName = element.nodeName.toLowerCase();
          if (nodeName !== 'area') {
            return true;
          }

          var map = element.parentNode;
          if (!this.maps[map.name]) {
            this.maps[map.name] = [];
          }

          this.maps[map.name].push(element);
          return false;
        }, this);
      }
    }]);

    return Maps;
  })();

  module.exports = function (elements, context) {
    // images - unless they are focusable themselves, likely not
    // part of the elements list, so we'll have to find them and
    // sort them into the elements list manually
    var usemaps = context.querySelectorAll('img[usemap]');
    var maps = new Maps(context);

    // remove all <area> elements from the elements list,
    // but put them the map for later retrieval
    var _elements = maps.extractAreasFromList(elements);

    if (!usemaps.length) {
      // the context does not contain any <area>s so no need
      // to replace anything, just remove any maps
      return _elements;
    }

    return (0, _mergeInDomOrder['default'])({
      list: _elements,
      elements: usemaps,
      resolveElement: function resolveElement(image) {
        var name = image.getAttribute('usemap').slice(1);
        return maps.getAreasFor(name);
      }
    });
  };
});
//# sourceMappingURL=tabsequence.sort-area.js.map