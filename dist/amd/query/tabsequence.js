define(['exports', 'module', 'platform', './tabbable', '../util/node-array', './tabsequence.sort-area', './tabsequence.sort-shadowed', './tabsequence.sort-tabindex', './tabsequence.supports'], function (exports, module, _platform, _tabbable, _utilNodeArray, _tabsequenceSortArea, _tabsequenceSortShadowed, _tabsequenceSortTabindex, _tabsequenceSupports) {
  // http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
  // http://www.w3.org/WAI/PF/aria-practices/#keyboard

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _platform2 = _interopRequireDefault(_platform);

  var _queryTabbable = _interopRequireDefault(_tabbable);

  var _nodeArray = _interopRequireDefault(_utilNodeArray);

  var _sortArea = _interopRequireDefault(_tabsequenceSortArea);

  var _sortShadowed = _interopRequireDefault(_tabsequenceSortShadowed);

  var _sortTabindex = _interopRequireDefault(_tabsequenceSortTabindex);

  var _supports2 = _interopRequireDefault(_tabsequenceSupports);

  var supports = undefined;

  function moveContextToBeginning(elements, context) {
    var pos = elements.indexOf(context);
    if (pos > 0) {
      var tmp = elements.splice(pos, 1);
      return tmp.concat(elements);
    }

    return elements;
  }

  function sortElements(elements, _context) {
    elements = (0, _sortTabindex['default'])(elements);

    if (supports.tabsequenceSortsAreaAtImagePosition) {
      // Some browsers sort <area> in DOM order, some place the <area>s
      // where the <img> referecing them would've been in DOM order.
      // https://github.com/medialize/ally.js/issues/5
      elements = (0, _sortArea['default'])(elements, _context);
    }

    return elements;
  }

  module.exports = function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref.context;
    var includeContext = _ref.includeContext;
    var strategy = _ref.strategy;

    if (!supports) {
      supports = (0, _supports2['default'])();
    }

    var _context = (0, _nodeArray['default'])(context)[0] || document.documentElement;
    var elements = (0, _queryTabbable['default'])({ context: _context, includeContext: includeContext, strategy: strategy });

    if (document.body.createShadowRoot && (_platform2['default'].name === 'Chrome' || _platform2['default'].name === 'Chrome Mobile')) {
      // sort tabindex localized to shadow dom
      // see https://github.com/medialize/ally.js/issues/6
      elements = (0, _sortShadowed['default'])(elements, _context, sortElements);
    } else {
      elements = sortElements(elements, _context);
    }

    if (includeContext) {
      // if we include the context itself, it has to be the first
      // element of the sequence
      elements = moveContextToBeginning(elements, _context);
    }

    return elements;
  };
});
//# sourceMappingURL=tabsequence.js.map