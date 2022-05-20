import { TNode, TNodePrintOptions } from './tree-types';
interface TNodePrintState {
    parentLeftPrefix: string;
    isChild: boolean;
    isLast: boolean;
}
export default function tnodeSnapshot(tnode: TNode, params: Partial<TNodePrintState> & TNodePrintOptions): string;
export {};
