import React, { PropsWithChildren } from 'react';
import { RenderersProps, RenderHTMLPassedProps } from '../shared-types';
/**
 * Consume props from {@link RenderHTMLProps.renderersProps}.
 *
 * @param tagName - The name of the element.
 * @typeParam K - The type literal corresponding to the element name.
 * @returns props for this renderer.
 *
 * @public
 */
export declare function useRendererProps<RendererProps extends RenderersProps = RenderersProps, K extends keyof RendererProps = keyof RendererProps>(tagName: K): RendererProps[K];
/**
 * @internal
 */
export default function RenderersPropsProvider(props: PropsWithChildren<RenderHTMLPassedProps>): React.FunctionComponentElement<React.ProviderProps<Required<RenderersProps>>>;
