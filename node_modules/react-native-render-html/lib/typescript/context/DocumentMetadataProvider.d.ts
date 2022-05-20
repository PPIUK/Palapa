import React from 'react';
import { DocumentMetadata } from '../shared-types';
declare const DocumentMetadataProvider: React.Provider<DocumentMetadata>;
/**
 * Get access to the parsed HTML metadata anywhere in the render tree.
 */
export declare function useDocumentMetadata(): DocumentMetadata;
export default DocumentMetadataProvider;
