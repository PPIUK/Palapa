function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Children, Fragment } from 'react';
import MarkedListItem from './MarkedListItem';
import useMarkedList from './useMarkedList';
/**
 * A component which given a counter style, wraps each of its children with a
 * {@link MarkedListItem}. The latter prepends the child with a marker
 * box containing a marker string representation for this child index.
 *
 * See {@link https://www.w3.org/TR/css-lists-3/#markers | CSS Lists and Counters Module Level 3, Markers}.
 *
 * @public
 */

export default function MarkedList({
  children,
  Container = Fragment,
  ...props
}) {
  const normalChildren = Children.toArray(children);
  const listProps = useMarkedList({ ...props,
    length: normalChildren.length
  });
  return /*#__PURE__*/React.createElement(Container, {}, normalChildren.map((child, index) => {
    return /*#__PURE__*/React.createElement(MarkedListItem, _extends({
      key: index,
      index: index
    }, listProps), child);
  }));
}
//# sourceMappingURL=MarkedList.js.map