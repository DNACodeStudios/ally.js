define(['exports', 'module', '../util/node-array', '../query/focusable', '../element/disabled', '../util/compare-position'], function (exports, module, _utilNodeArray, _queryFocusable, _elementDisabled, _utilComparePosition) {
  /*
    Utility to make a sub-tree of the DOM inert. Inert means the elements cannot be interacted
    with and they cannot be focused via script, pointer or keyboard.
  
    inert attribute was [removed](https://html5.org/r/8536) [tweet by steve](https://twitter.com/stevefaulkner/status/443075900201259008)
    but definition of [inert subtrees](http://www.w3.org/html/wg/drafts/html/master/editing.html#inert-subtrees) remains.
  
    [implementation idea by Vasilis](http://codepen.io/vasilisvg/pen/scowI)
    [inert attribute polyfill by GoogleChrome](https://github.com/GoogleChrome/inert-polyfill)
  
    [Gecko Bug: Inert Attribute](https://bugzilla.mozilla.org/show_bug.cgi?id=921504)
    [Chromium Bug: Inert Attribute](https://code.google.com/p/chromium/issues/detail?id=269846)
    [Chromium Bug: Inert Subtree](https://code.google.com/p/chromium/issues/detail?id=241699)
    [WebKit Bug: Inert Subtree](https://bugs.webkit.org/show_bug.cgi?id=110952)
  */

  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _nodeArray = _interopRequireDefault(_utilNodeArray);

  var _queryFocusable2 = _interopRequireDefault(_queryFocusable);

  var _elementDisabled2 = _interopRequireDefault(_elementDisabled);

  function makeElementInert(element) {
    return (0, _elementDisabled2['default'])(element, true);
  }

  function undoElementInert(element) {
    return (0, _elementDisabled2['default'])(element, false);
  }

  var observerConfig = {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ['tabindex']
  };

  var InertSubtree = (function () {
    function InertSubtree() {
      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var context = _ref.context;
      var filter = _ref.filter;

      _classCallCheck(this, InertSubtree);

      this._context = (0, _nodeArray['default'])(context || document.documentElement)[0];
      this._filter = (0, _nodeArray['default'])(filter);

      this.disengage = this.disengage.bind(this);
      this.handleMutation = this.handleMutation.bind(this);
      this.renderInert = this.renderInert.bind(this);
      this.filterElements = this.filterElements.bind(this);

      var focusable = (0, _queryFocusable2['default'])({
        context: this._context,
        includeContext: true,
        strategy: 'all'
      });

      this.renderInert(focusable);
      this.startObserver();
    }

    _createClass(InertSubtree, [{
      key: 'disengage',
      value: function disengage() {
        if (!this._context) {
          return;
        }

        undoElementInert(this._context);
        [].forEach.call(this._context.querySelectorAll('[data-ally-disabled], :disabled'), undoElementInert);

        this._filter = null;
        this._context = null;
        this._observer && this._observer.disconnect();
        this._observer = null;
      }
    }, {
      key: 'listQueryFocusable',
      value: function listQueryFocusable(list) {
        return list
        // find all focusable elements within the given contexts
        .map(function (element) {
          return (0, _queryFocusable2['default'])({ context: element, includeContext: true, strategy: 'all' });
        })
        // flatten nested arrays
        .reduce(function (previous, current) {
          return previous.concat(current);
        }, []);
      }
    }, {
      key: 'renderInert',
      value: function renderInert(elements) {
        elements.filter(this.filterElements).forEach(makeElementInert);
      }
    }, {
      key: 'filterContext',
      value: function filterContext(element) {
        // ignore elements that are not within the context sub-trees
        var isParentOfElement = (0, _utilComparePosition.getParentComparator)({ element: element, includeSelf: true });
        return isParentOfElement(this._context);
      }
    }, {
      key: 'filterElements',
      value: function filterElements(element) {
        if (element === document.body && !element.hasAttribute('tabindex')) {
          // ignore the body (default focus element) unless it was made focusable
          return false;
        }

        // ignore elements within the exempted sub-trees
        var isParentOfElement = (0, _utilComparePosition.getParentComparator)({ element: element, includeSelf: true });
        return !this._filter.some(isParentOfElement);
      }
    }, {
      key: 'startObserver',
      value: function startObserver() {
        var _this = this;

        if (!window.MutationObserver) {
          // not supporting IE10 via Mutation Events, because they're too expensive
          // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events
          return;
        }
        // http://caniuse.com/#search=mutation
        // https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
        this._observer = new MutationObserver(function (mutations) {
          return mutations.forEach(_this.handleMutation);
        });
        this._observer.observe(this._context, observerConfig);
      }
    }, {
      key: 'handleMutation',
      value: function handleMutation(mutation) {
        if (mutation.type === 'childList') {
          var addedElements = (0, _nodeArray['default'])(mutation.addedNodes).filter(function (element) {
            return element.nodeType === Node.ELEMENT_NODE;
          });
          if (!addedElements.length) {
            return;
          }

          var addedFocusableElements = this.listQueryFocusable(addedElements);
          this.renderInert(addedFocusableElements);
        } else if (mutation.type === 'attribute' && !this.filterElements(mutation.target) && this.filterContext(mutation.target)) {
          makeElementInert(mutation.target);
        }
      }
    }]);

    return InertSubtree;
  })();

  module.exports = function () {
    var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var context = _ref2.context;
    var filter = _ref2.filter;

    var service = new InertSubtree({ context: context, filter: filter });
    return { disengage: service.disengage };
  };
});
//# sourceMappingURL=disabled.js.map