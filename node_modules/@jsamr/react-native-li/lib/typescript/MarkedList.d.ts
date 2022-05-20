import React, { PropsWithChildren } from 'react';
import { MarkedListProps } from './shared-types';
/**
 * A component which given a counter style, wraps each of its children with a
 * {@link MarkedListItem}. The latter prepends the child with a marker
 * box containing a marker string representation for this child index.
 *
 * See {@link https://www.w3.org/TR/css-lists-3/#markers | CSS Lists and Counters Module Level 3, Markers}.
 *
 * @public
 */
export default function MarkedList({ children, Container, ...props }: PropsWithChildren<MarkedListProps>): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
