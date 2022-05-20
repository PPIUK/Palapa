import { GenericTNodeCtor } from './TNodeCtor';
import { TNodeImpl, TNodeInit } from './tree-types';
export interface TPhrasingImpl extends TNodeImpl {
}
declare const TPhrasingCtor: GenericTNodeCtor<TNodeInit, TPhrasingImpl>;
export default TPhrasingCtor;
export { TPhrasingCtor };
