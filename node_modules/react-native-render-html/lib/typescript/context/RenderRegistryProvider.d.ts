import { TNode, TText } from '@native-html/transient-render-engine';
import React, { PropsWithChildren } from 'react';
import { CustomTagRendererRecord } from '../render/render-types';
import RenderRegistry from '../render/RenderRegistry';
import { HTMLElementModelRecord } from '../shared-types';
export declare const RenderRegistryContext: React.Context<RenderRegistry>;
export declare function useRendererRegistry(): RenderRegistry;
export declare function useRendererConfig<T extends TNode>(tnode: T): import("../render/RenderRegistry").RendererConfig<T>;
export declare function useInternalTextRenderer(tnode: TText): import("../render/render-types").InternalTextContentRenderer | null;
export default function RenderRegistryProvider({ children, elementModels, renderers }: PropsWithChildren<{
    elementModels: HTMLElementModelRecord;
    renderers?: CustomTagRendererRecord;
}>): JSX.Element;
