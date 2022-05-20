import { Element } from '../dom/dom-utils';
import { TNodeImpl, TNodeInit } from './tree-types';
import { GenericTNodeCtor } from './TNodeCtor';
export interface TEmptyImpl extends TNodeImpl<TEmptyInit> {
    readonly domNode: Element;
}
export interface TEmptyInit extends TNodeInit {
    domNode: Element;
}
declare const TEmptyCtor: GenericTNodeCtor<TEmptyInit, TEmptyImpl>;
export default TEmptyCtor;
export { TEmptyCtor };
