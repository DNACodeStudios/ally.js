define(['exports', 'module', '../prototype/svgelement.prototype.focus', './focusable.supports'], function (exports, module, _prototypeSvgelementPrototypeFocus, _focusableSupports) {
  // NOTE: this selector MUST *never* be used directly,
  // always go through query/focusable or is/focusable.js
  // there are too many edge cases that they could be covered in
  // a simple CSS selector…

  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _supports2 = _interopRequireDefault(_focusableSupports);

  var supports = undefined;

  var selector = undefined;

  module.exports = function () {
    if (!supports) {
      supports = (0, _supports2['default'])();
    }

    if (typeof selector === 'string') {
      return selector;
    }

    // http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
    selector = ''
    // IE11 supports.can focus <table> and <td>
     + (supports.canFocusTable ? 'table, td,' : '')
    // IE11 supports.can focus <fieldset>
     + (supports.canFocusFieldset ? 'fieldset,' : '')
    // Namespace problems of [xlink:href] explained in http://stackoverflow.com/a/23047888/515124
    // Firefox supports.cannot focus <svg> child elements from script
     + (supports.canFocusSvgMethod ? 'svg a[*|href],' : '')
    // may behave as 'svg, svg *,' in chrome as *every* svg element with a focus event listener is focusable
    // navigational elements
     + 'a[href],'
    // validity determined by is/valid-area.js
     + 'area[href],'
    // validity determined by is/disabled.js
     + 'input, select, textarea, button,'
    // browsing context containers
     + 'iframe, object, embed,'
    // interactive content
     + 'keygen,' + (supports.canFocusAudioWithoutControls ? 'audio,' : 'audio[controls],') + (supports.canFocusVideoWithoutControls ? 'video,' : 'video[controls],') + (supports.canFocusSummary ? 'summary,' : '')
    // validity determined by is/valid-tabindex.js
     + '[tabindex],'
    // editing hosts
     + '[contenteditable]';

    // where ShadowDOM is supported, we also want the shadowed focusable elements (via ">>>" or "/deep/")
    if (supports.cssShadowPiercingDeepCombinator) {
      selector += ', html ' + supports.cssShadowPiercingDeepCombinator + ' ' + selector.replace(/\s*,\s*/g, ',').split(',').join(', html ' + supports.cssShadowPiercingDeepCombinator + ' ');
    }

    return selector;
  };
});
//# sourceMappingURL=focusable.js.map