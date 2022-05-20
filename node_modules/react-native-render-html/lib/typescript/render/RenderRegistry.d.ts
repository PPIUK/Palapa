import { TNode } from '@native-html/transient-render-engine';
import { CustomRenderer, HTMLElementModelRecord, InternalRenderer } from '../shared-types';
import { CustomTagRendererRecord, InternalTextContentRenderer } from './render-types';
export interface RendererConfig<T extends TNode> {
    Custom: CustomRenderer<T> | null;
    Default: InternalRenderer<T> | null;
}
export default class RenderRegistry {
    constructor(customRenderers: CustomTagRendererRecord | undefined, elementModels: HTMLElementModelRecord);
    private readonly customRenderers;
    private readonly elementModels;
    private getCustomRendererForTNode;
    private getDefaultRendererForTNode;
    getInternalTextRenderer(tagName: string | null): InternalTextContentRenderer | null;
    getRendererConfigForTNode<T extends TNode>(tnode: T): RendererConfig<T>;
}
