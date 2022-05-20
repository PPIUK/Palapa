import React from 'react';
import { SourceLoaderProps } from './internal-types';
import { HTMLSourceDom } from './shared-types';
export declare type DomSourceLoaderProps = {
    source: HTMLSourceDom;
} & SourceLoaderProps;
export default function SourceLoaderDom(props: DomSourceLoaderProps): React.FunctionComponentElement<{
    document: import("@native-html/transient-render-engine").Document | import("@native-html/transient-render-engine").Element;
    baseUrl: string | undefined;
}>;
