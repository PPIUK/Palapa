import TRenderEngine from '@native-html/transient-render-engine';
import { PropsWithChildren, ReactElement } from 'react';
import { TRenderEngineConfig } from './shared-types';
export declare const tRenderEngineProviderPropTypes: Record<keyof TRenderEngineConfig, any>;
/**
 * Default fallback font for special keys such as 'sans-serif', 'monospace',
 * 'serif', based on current platform.
 */
export declare const defaultFallbackFonts: {
    'sans-serif': string;
    monospace: string;
    serif: string;
};
export declare const defaultTRenderEngineProviderProps: TRenderEngineConfig;
/**
 * Use the ambient transient render engine.
 *
 * @returns The ambient transient render engine.
 *
 * @public
 */
export declare function useAmbientTRenderEngine(): TRenderEngine;
/**
 * A react component to share a {@link TRenderEngine} instance across different
 * rendered contents via {@link RenderHTMLSource}. This can significantly enhance
 * performance in applications with potentially dozens or hundreds of distinct
 * rendered snippets such as chat apps.
 *
 * @param props - Pass engine config here.
 */
declare function TRenderEngineProvider({ children, ...config }: PropsWithChildren<TRenderEngineConfig>): ReactElement;
declare namespace TRenderEngineProvider {
    var defaultProps: TRenderEngineConfig;
    var propTypes: Record<keyof TRenderEngineConfig, any>;
}
export default TRenderEngineProvider;
