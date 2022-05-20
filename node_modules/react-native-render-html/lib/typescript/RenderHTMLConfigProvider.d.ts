import { PropsWithChildren, ReactElement } from 'react';
import { RenderHTMLConfig } from './shared-types';
export declare type RenderHTMLConfigPropTypes = Record<keyof RenderHTMLConfig, any>;
export declare const renderHTMLConfigPropTypes: RenderHTMLConfigPropTypes;
/**
 * A component to provide configuration for {@link RenderHTMLSource}
 * descendants, to be used in conjunction with {@link TRenderEngineProvider}.
 */
declare function RenderHTMLConfigProvider(props: PropsWithChildren<RenderHTMLConfig>): ReactElement;
declare namespace RenderHTMLConfigProvider {
    var propTypes: RenderHTMLConfigPropTypes;
}
export default RenderHTMLConfigProvider;
