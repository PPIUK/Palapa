import { TNode } from '@native-html/transient-render-engine';
import { CustomRenderer, CustomRendererProps, InternalRenderer, InternalRendererProps, TDefaultRenderer, TDefaultRendererProps } from '../shared-types';
import { TNodeSubRendererProps } from '../internal-types';
/**
 * @internal
 */
export default function useAssembledCommonProps<T extends TNode>({ tnode, propsFromParent, sharedProps, renderIndex, renderLength, TNodeChildrenRenderer }: TNodeSubRendererProps<T>, TDefault: TDefaultRenderer<T> | null): {
    Renderer: CustomRenderer<T> | InternalRenderer<T> | null;
    assembledProps: CustomRendererProps<T> & TDefaultRendererProps<T> & InternalRendererProps<T>;
};
