import { GenericTNodeCtor } from './TNodeCtor';
import { TNodeInit, TNodeImpl, DocumentContext } from './tree-types';
export declare type TDocumentInit = Omit<TNodeInit, 'elementModel'>;
export interface TDocumentImpl extends TNodeImpl<TNodeInit> {
    readonly context: Readonly<DocumentContext>;
    /**
     * Iterate over children and extract meta-information into context field.
     * Replace children with a single-element array containing the body.
     */
    parseChildren(): void;
}
declare const TDocumentCtor: GenericTNodeCtor<TDocumentInit, TDocumentImpl>;
export { TDocumentCtor };
export default TDocumentCtor;
