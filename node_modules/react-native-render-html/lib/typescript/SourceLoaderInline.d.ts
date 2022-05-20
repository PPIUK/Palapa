import React from 'react';
import { SourceLoaderProps } from './internal-types';
import { HTMLSourceInline } from './shared-types';
export declare type InlineSourceLoaderProps = {
    source: HTMLSourceInline;
} & SourceLoaderProps;
export default function SourceLoaderInline(props: InlineSourceLoaderProps): React.FunctionComponentElement<{
    document: string;
    baseUrl: string | undefined;
}>;
