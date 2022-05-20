/// <reference types="react" />
import type { ComponentType } from 'react';
import type { CounterStyleRenderer } from '@jsamr/counter-style';
import { PropsWithChildren } from 'react';
import { default as React_2 } from 'react';
import type { ReactNode } from 'react';
import type { RtlOptions } from '@jsamr/counter-style';
import { StyleProp } from 'react-native';
import type { TextStyle } from 'react-native';
import { ViewStyle } from 'react-native';

/**
 * A component which given a counter style, wraps each of its children with a
 * {@link MarkedListItem}. The latter prepends the child with a marker
 * box containing a marker string representation for this child index.
 *
 * See {@link https://www.w3.org/TR/css-lists-3/#markers | CSS Lists and Counters Module Level 3, Markers}.
 *
 * @public
 */
declare function MarkedList({ children, Container, ...props }: PropsWithChildren<MarkedListProps>): React_2.ReactElement<any, string | React_2.JSXElementConstructor<any>>;
export { MarkedList }
export default MarkedList;

/**
 * A component which reproduces CSS3 `display: list-item;` behavior. It
 * prepends its child with a marker box containing a marker string
 * representation for this child index.
 *
 * See {@link https://www.w3.org/TR/css-lists-3/#markers | CSS Lists and Counters Module Level 3, Markers}.
 *
 * @public
 */
export declare function MarkedListItem({ counterRenderer, index, startIndex, rtlLineReversed, rtlMarkerReversed, markerTextStyle, markerBoxStyle, maxNumOfCodepoints, markerTextWidth, style, renderMarker, enableMarkerClipping, children }: PropsWithChildren<MarkedListItemProps>): JSX.Element;

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
 * Props for the {@link MarkedList} component.
 *
 * @public
 */
export declare interface MarkedListProps {
    /**
     * The counter renderer for this list.
     */
    counterRenderer: CounterStyleRenderer;
    /**
     * Set the line layout in `flexDirection: 'row-reverse'` and left-align the
     * marker box.
     *
     * @remarks Will be ignored if `I18nManager.isRTL` is `true`.
     *
     * @defaultValue false
     */
    rtlLineReversed?: boolean;
    /**
     * Should the marker string be rendered in reverse order?
     *
     * @remarks Fine-grained options are available when you provide an option
     * object. See `@jsamr/counter-style` documentation.
     *
     * @defaultValue false
     */
    rtlMarkerReversed?: true | false | RtlOptions;
    /**
     * Should the width of the marker box be computed dynamically, e.g. depend on
     * the longest marker in the list?
     *
     * @defaultValue true
     */
    dynamicMarkerBoxWidth?: boolean;
    /**
     * The index for the first item in the list. Negative indexes are supported.
     *
     * @defaultValue 1
     */
    startIndex?: number;
    /**
     * Style for the line wrapper.
     */
    lineStyle?: StyleProp<ViewStyle>;
    /**
     * A plain JavaScript object text style for the marker string. It is
     * advised to pass the same `fontSize` and `lineHeight` as the list content
     * for perfect horizontal alignment.
     *
     * @remarks It should not contain CSS box model properties and it should be a
     * plain JavaScript object. **Do not** use StyleSheet or array styles.
     */
    markerTextStyle?: TextStyle;
    /**
     * Style for the marker box container.
     *
     * @remarks It is discouraged to set
     * `(min,max)width` when {@link MarkedListProps.dynamicMarkerBoxWidth} is set
     * to `true`. In that case, use {@link MarkedListProps.computeMarkerBoxWidth}
     * instead.
     */
    markerBoxStyle?: StyleProp<ViewStyle>;
    /**
     * A function to compute marker box width depending on the maximum length of
     * the marker string in range.
     *
     * @remarks
     * - Font size is derived from `markerStyle` prop.
     * - Will be ignored when {@link MarkedListProps.dynamicMarkerBoxWidth} is
     *   set to `false`.
     */
    computeMarkerBoxWidth?: (maxCodepointsLengthInRange: number, fontSize: number) => number;
    /**
     * A custom Marker render function.
     *
     * @remarks You are advised to use {@link MarkerBox} component.
     */
    renderMarker?: (props: MarkerBoxProps) => ReactNode;
    /**
     * The component used to wrap list elements.
     *
     * @defaultValue Fragment
     */
    Container?: ComponentType<any>;
    /**
     * Clip the marker text when it overflows the marker box.
     *
     * @defaultValue false
     */
    enableMarkerClipping?: boolean;
}

/**
 * Default component to render the list marker.
 *
 * See {@link https://www.w3.org/TR/css-lists-3/#marker-pseudo | CSS Lists and Counters Module Level 3, Markers}
 *
 * @public
 */
export declare function MarkerBox({ style, counterRenderer, counterIndex, markerTextStyle, markerTextWidth, enableMarkerClipping }: MarkerBoxProps): JSX.Element;

/**
 * Props for the {@link MarkerBox} component.
 *
 * @public
 */
export declare interface MarkerBoxProps {
    /**
     * Style for the container `Text` element.
     */
    style: StyleProp<TextStyle>;
    /**
     * Style for any text element. Should not contain CSS box model properties.
     */
    markerTextStyle: TextStyle;
    /**
     * The width for the marker text element.
     */
    markerTextWidth: number | false;
    /**
     * The renderer to generate the marker string.
     */
    counterRenderer: CounterStyleRenderer;
    /**
     * The index to render.
     */
    counterIndex: number;
    /**
     * The maximum length of the `markerString` in range.
     */
    maxNumOfCodepoints: number;
    /**
     * Whether to reverse or not the order of elements in marker (prefix,
     * counter, suffix).
     */
    rtlMarkerReversed: boolean;
    /**
     * Clip the marker text when it overflows the marker box.
     */
    enableMarkerClipping: boolean;
}

/**
 * A hook to reuse MarkedList logic to render custom lists components in
 * combination with {@link MarkedListItem}.
 *
 * @public
 */
export declare function useMarkedList({ counterRenderer, startIndex, lineStyle, rtlLineReversed, rtlMarkerReversed, markerTextStyle, markerBoxStyle, dynamicMarkerBoxWidth, length, renderMarker, enableMarkerClipping, computeMarkerBoxWidth }: MarkedListProps & {
    length: number;
}): Omit<MarkedListItemProps, 'index'>;

export { }
