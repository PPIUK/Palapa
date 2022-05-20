import React, { PropsWithChildren } from 'react';
import { RenderHTMLSharedProps, RendererBaseProps } from '../shared-types';
/**
 * Use shared props. See {@link RenderHTMLSharedProps}.
 *
 * @public
 */
export declare function useSharedProps(): import("../shared-types").RenderHTMLAmbiantSharedProps;
/**
 * @internal
 */
export declare function useDefaultContainerProps(): Pick<RendererBaseProps<any>, 'viewProps' | 'textProps'>;
/**
 * Compute max width for a given tag. Uses
 * {@link RenderHTMLProps.computeEmbeddedMaxWidth}
 * and {@link RenderHTMLProps.contentWidth} under the hood.
 *
 * @param tagName - The tag to target.
 *
 * @public
 */
export declare function useComputeMaxWidthForTag(tagName: string): (cw: number) => number;
/**
 * @internal
 */
export default function SharedPropsProvider(props: PropsWithChildren<RenderHTMLSharedProps>): React.FunctionComponentElement<React.ProviderProps<import("../shared-types").RenderHTMLAmbiantSharedProps>>;
