export declare type EmptyProps = typeof emptyProps;
export declare const emptyProps: {
    $$empty: symbol;
};
export declare function isNotEmpty<T>(p: T): p is Exclude<T, EmptyProps | null>;
