import { FunctionComponent } from 'react';
import { TChildrenRendererProps } from './shared-types';
/**
 * A component to render collections of tnodes.
 * Especially useful when used with {@link useTNodeChildrenProps}.
 */
declare const TChildrenRenderer: FunctionComponent<TChildrenRendererProps>;
export declare const tchildrenRendererDefaultProps: Pick<TChildrenRendererProps, 'propsForChildren'>;
export default TChildrenRenderer;
