
/*
    query/firstTabbable() finds the first suitable element to receive focus in the given context.
    If an element has [autofocus] return that element, otherwise return the first element
    in document order that does *not* have a positive tabIndex (e.g. as [tabindex="1"]),
    otherwise return the context itself, if it is focusable.

    Note: Chrome's <dialog> will focus the first tabbable element, even if it has
    [tabindex="1"]. Since [tabindex="1"] is considered
    bad practice we'll ignore it until someone complains.
 */

import 'array.prototype.findindex';
import queryTabbable from './tabbable';
import isFocusable from '../is/focusable';
import nodeArray from '../util/node-array';

function hasAutofocus(element) {
  // [autofocus] actually only works on form element, but who cares?
  return element.hasAttribute('autofocus');
}

function hasNoPositiveTabindex(element) {
  return element.tabIndex <= 0;
}

export default function({context, sequence, strategy, ignoreAutofocus, defaultToContext} = {}) {
  let index = -1;

  if (!sequence) {
    context = nodeArray(context || document.body)[0];
    sequence = queryTabbable({ context, strategy });
  }

  if (sequence.length && !ignoreAutofocus) {
    // prefer [autofocus]
    index = sequence.findIndex(hasAutofocus);
  }

  if (sequence.length && index === -1) {
    // ignore positive [tabindex]
    index = sequence.findIndex(hasNoPositiveTabindex);
  }

  if (index === -1 && defaultToContext && context && isFocusable(context)) {
    return context;
  }

  return sequence[index] || null;
}
