import React from 'react';
import { RenderHTMLConfig, HTMLSourceUri } from '../shared-types';
export declare function defaultRenderError(source: HTMLSourceUri): JSX.Element;
export declare function defaultRenderLoading(): JSX.Element;
declare const sourceLoaderContext: React.Context<Pick<Required<RenderHTMLConfig>, "remoteErrorView" | "remoteLoadingView">>;
export default sourceLoaderContext;
