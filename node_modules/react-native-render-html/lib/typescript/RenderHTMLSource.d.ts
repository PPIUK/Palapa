import React from 'react';
import { RenderHTMLSourceProps } from './shared-types';
export declare type RenderHTMLSourcePropTypes = Record<keyof RenderHTMLSourceProps, any>;
export declare const renderSourcePropTypes: RenderHTMLSourcePropTypes;
/**
 * A React component to render HTML snippets.
 *
 * @remarks This component is useful when you have to load dozens of HTML
 * snippets with the same config. Performance is expected to improve in such
 * scenarios.
 *
 * @warning This component requires to have {@link TRenderEngineProvider}
 * and {@link RenderHTMLConfigProvider} as parents.
 */
declare const RenderHTMLSource: React.NamedExoticComponent<RenderHTMLSourceProps>;
export default RenderHTMLSource;
