import React from 'react';
import type TNodeChildrenRenderer from '../TNodeChildrenRenderer';
import type TChildrenRenderer from '../TChildrenRenderer';
/**
 * This context allows dependency injection to avoid circular dependencies.
 */
declare const TChildrenRenderersContext: React.Context<{
    TChildrenRenderer: typeof TChildrenRenderer;
    TNodeChildrenRenderer: typeof TNodeChildrenRenderer;
}>;
export declare function useTNodeChildrenRenderer(): typeof TNodeChildrenRenderer;
export declare function useTChildrenRenderer(): React.FunctionComponent<import("..").TChildrenRendererProps>;
export default TChildrenRenderersContext;
