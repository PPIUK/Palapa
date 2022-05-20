/// <reference types="react" />
import { TBlock } from '@native-html/transient-render-engine';
import type { InternalRendererProps, ListElementConfig } from '../shared-types';
export interface ListElementProps<T extends 'ol' | 'ul'> extends InternalRendererProps<TBlock>, ListElementConfig {
    listType: T;
}
export declare function getMarkerBoxStyle(markerWidth: number | false, paddingValue: string | number | undefined): {
    width: string | number | undefined;
};
export default function ListElement({ tnode, TDefaultRenderer, listType, style, getFallbackListStyleTypeFromNestLevel, markerBoxStyle, markerTextStyle: providedMarkerTextStyle, enableExperimentalRtl, enableRemoveTopMarginIfNested, enableRemoveBottomMarginIfNested, enableDynamicMarkerBoxWidth, ...props }: ListElementProps<'ol' | 'ul'>): JSX.Element;
