import { Text } from '../dom/dom-utils';
import { TNodeInit, TNodeImpl } from './tree-types';
import { GenericTNodeCtor } from './TNodeCtor';
export interface TTextInit extends TNodeInit {
    readonly textNode: Text;
}
export interface TTextImpl extends TNodeImpl<TTextInit> {
    readonly data: string;
    /**
     * True when tagName is defined and should be substituted with text when
     * rendering. E.g. <br> tags.
     */
    readonly isVoid: boolean;
}
declare const TTextCtor: GenericTNodeCtor<TTextInit, TTextImpl>;
export default TTextCtor;
export { TTextCtor };
