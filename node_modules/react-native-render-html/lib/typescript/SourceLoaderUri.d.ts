import React from 'react';
import { HTMLSourceUri } from './shared-types';
import { SourceLoaderProps } from './internal-types';
export declare type UriSourceLoaderProps = {
    source: HTMLSourceUri;
} & SourceLoaderProps;
export default function SourceLoaderUri(props: UriSourceLoaderProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.FunctionComponentElement<{
    document: string;
    baseUrl: string;
}>;
