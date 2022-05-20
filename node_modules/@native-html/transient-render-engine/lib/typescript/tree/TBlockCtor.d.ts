import { GenericTNodeCtor } from './TNodeCtor';
import { TNodeImpl, TNodeInit } from './tree-types';
export interface TBlockImpl extends TNodeImpl {
}
declare const TBlockCtor: GenericTNodeCtor<TNodeInit, TBlockImpl>;
export default TBlockCtor;
export { TBlockCtor };
