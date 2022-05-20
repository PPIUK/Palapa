import { TNodeImpl } from '../tree/tree-types';
import { Document } from 'domhandler';
import { TDocumentImpl } from '../tree/TDocumentImpl';
import { Node } from '../dom/dom-utils';
import { TStyles } from '../styles/TStyles';
import { DataFlowParams } from './types';
export declare function mapNodeList({ nodeList, parent, parentStyles, params }: {
    nodeList: Node[];
    parentStyles?: TStyles;
    parent: TNodeImpl | null;
    params: DataFlowParams;
}): TNodeImpl[];
export declare function bindChildren(node: TNodeImpl, children: Node[], params: DataFlowParams): void;
interface TranslateParams<T = Node> {
    node: T;
    params: DataFlowParams;
    parent: TNodeImpl | null;
    parentStyles?: TStyles;
    nodeIndex?: number;
}
export declare function translateNode({ node, parentStyles, params, nodeIndex, parent }: TranslateParams<Node | null>): TNodeImpl | null;
export declare function translateDocument(document: Document, params: DataFlowParams): TDocumentImpl;
export {};
