import { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { MarkedListProps } from './shared-types';
/**
 * Props for the {@link MarkedListItem} component.
 *
 * @public
 */
export declare type MarkedListItemProps = Required<Pick<MarkedListProps, 'counterRenderer' | 'renderMarker' | 'markerTextStyle' | 'markerBoxStyle' | 'rtlLineReversed' | 'rtlMarkerReversed' | 'startIndex'>> & {
    index: number;
    markerTextWidth: number | false;
    maxNumOfCodepoints: number;
    enableMarkerClipping: boolean;
    style: StyleProp<ViewStyle>;
};
/**
 * A component which reproduces CSS3 `display: list-item;` behavior. It
 * prepends its child with a marker box containing a marker string
 * representation for this child index.
 *
 * See {@link https://www.w3.org/TR/css-lists-3/#markers | CSS Lists and Counters Module Level 3, Markers}.
 *
 * @public
 */
export default function MarkedListItem({ counterRenderer, index, startIndex, rtlLineReversed, rtlMarkerReversed, markerTextStyle, markerBoxStyle, maxNumOfCodepoints, markerTextWidth, style, renderMarker, enableMarkerClipping, children }: PropsWithChildren<MarkedListItemProps>): JSX.Element;
