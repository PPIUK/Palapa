import { InternalMixedRenderer } from '../render/render-types';
import { TNode } from '@native-html/transient-render-engine';
import { InternalRendererProps } from '../shared-types';
export declare function useAElementProps<T extends TNode>(props: InternalRendererProps<T>): InternalRendererProps<T>;
declare const ARenderer: InternalMixedRenderer;
export default ARenderer;
