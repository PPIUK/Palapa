import { MarkedListItemProps } from './MarkedListItem';
import { MarkedListProps } from './shared-types';
/**
 * A hook to reuse MarkedList logic to render custom lists components in
 * combination with {@link MarkedListItem}.
 *
 * @public
 */
export default function useMarkedList({ counterRenderer, startIndex, lineStyle, rtlLineReversed, rtlMarkerReversed, markerTextStyle, markerBoxStyle, dynamicMarkerBoxWidth, length, renderMarker, enableMarkerClipping, computeMarkerBoxWidth }: MarkedListProps & {
    length: number;
}): Omit<MarkedListItemProps, 'index'>;
