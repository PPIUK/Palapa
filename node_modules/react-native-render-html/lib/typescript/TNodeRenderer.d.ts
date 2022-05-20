import React from 'react';
import { TDefaultRenderer, TNodeRendererProps } from './shared-types';
import { TText, TBlock, TPhrasing } from '@native-html/transient-render-engine';
export type { TNodeRendererProps } from './shared-types';
declare const TDefaultBlockRenderer: TDefaultRenderer<TBlock>;
declare const TDefaultPhrasingRenderer: TDefaultRenderer<TPhrasing>;
declare const TDefaultTextRenderer: TDefaultRenderer<TText>;
/**
 * A component to render any {@link TNode}.
 */
declare const TNodeRenderer: React.NamedExoticComponent<TNodeRendererProps<any>>;
export { TDefaultBlockRenderer, TDefaultPhrasingRenderer, TDefaultTextRenderer };
export default TNodeRenderer;
