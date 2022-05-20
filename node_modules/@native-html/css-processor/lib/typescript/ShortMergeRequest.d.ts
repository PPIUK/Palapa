import { CSSProperties } from './processor-types';
export declare class ShortMergeRequest {
    readonly properties: CSSProperties | null;
    constructor(properties: CSSProperties | null);
    forEach(callback: (record: CSSProperties[number]) => void): void;
    map<T>(callback: (record: CSSProperties[number]) => T): T[];
    entries(): [string, any][];
}
