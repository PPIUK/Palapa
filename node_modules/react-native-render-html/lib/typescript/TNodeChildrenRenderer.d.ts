import { ReactElement } from 'react';
import { TChildrenRendererProps, TNodeChildrenRendererProps } from './shared-types';
/**
 * A hook especially useful when one need to tamper with children in a custom
 * renderer. Should be used with {@link TChildrenRenderer}.
 *
 * @example
 * For example, a custom renderer which inserts ads in an article:
 *
 * ```tsx
 * function ArticleRenderer(props) {
 *   const { tnode, TDefaultRenderer, ...defaultRendererProps } = props;
 *   const tchildrenProps = useTNodeChildrenProps(props);
 *   const firstChildrenChunk = tnode.children.slice(0, 2);
 *   const secondChildrenChunk = tnode.children.slice(2, 4);
 *   const thirdChildrenChunk = tnode.children.slice(4, 5);
 *   return (
 *     <TDefaultRenderer tnode={tnode} {...defaultRendererProps}>
 *       <TChildrenRenderer {...tchildrenProps} tchildren={firstChildrenChunk} />
 *       {firstChildrenChunk.length === 2 ? <AdComponent /> : null}
 *       <TChildrenRenderer {...tchildrenProps} tchildren={secondChildrenChunk} />
 *       {secondChildrenChunk.length === 2 ? <AdComponent /> : null}
 *       <TChildrenRenderer {...tchildrenProps} tchildren={thirdChildrenChunk} />
 *     </TDefaultRenderer>
 *   );
 * };
 * ```
 */
export declare function useTNodeChildrenProps({ tnode, propsForChildren, disableMarginCollapsing, renderChild }: TNodeChildrenRendererProps): TChildrenRendererProps;
/**
 * A component to render all children of a {@link TNode}.
 */
declare function TNodeChildrenRenderer(props: TNodeChildrenRendererProps): ReactElement;
declare namespace TNodeChildrenRenderer {
    var defaultProps: Pick<TChildrenRendererProps, "propsForChildren">;
}
export default TNodeChildrenRenderer;
