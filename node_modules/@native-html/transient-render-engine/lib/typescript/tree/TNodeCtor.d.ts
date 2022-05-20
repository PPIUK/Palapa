import { TNodeImpl, TNodeInit, TNodeType } from './tree-types';
export declare type GenericTNodeCtor<Init = TNodeInit, Impl = TNodeImpl> = {
    new (init: Init): Impl;
    prototype: Impl;
};
export declare type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};
declare const TNodeCtor: {
    <Impl extends TNodeImpl<TNodeInit> = TNodeImpl<TNodeInit>>(this: Mutable<TNodeImpl>, type: TNodeType, displayName: string, extraAccessors?: { [k in Exclude<keyof Impl, keyof TNodeImpl<TNodeInit>>]: {
        get: () => any;
        set?: ((val: any) => void) | undefined;
    }; } | undefined): void;
    prototype: any;
};
export default TNodeCtor;
