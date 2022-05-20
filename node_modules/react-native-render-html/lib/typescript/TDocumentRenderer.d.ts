import React from 'react';
import { TDocument } from '@native-html/transient-render-engine';
import { RenderHTMLSourceProps } from './shared-types';
declare const TDocumentRenderer: React.MemoExoticComponent<({ tdoc, baseUrl, onDocumentMetadataLoaded }: {
    baseUrl?: string | undefined;
    onDocumentMetadataLoaded?: RenderHTMLSourceProps['onDocumentMetadataLoaded'];
    tdoc: TDocument;
}) => JSX.Element>;
export default TDocumentRenderer;
