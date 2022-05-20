import { LongCSSPropertyValidator } from './LongCSSPropertyValidator';
import { CSSPropertyValidatorParams, CSSPropertyModel } from './types';
export declare class LongEnumerationCSSPropertyValidator<C extends CSSPropertyModel> extends LongCSSPropertyValidator<C, string> {
    readonly allowedList: ReadonlyArray<string>;
    constructor(params: CSSPropertyValidatorParams<C>, allowedList: string[]);
    normalizeRawInlineCSSValue(v: string): string | null;
    normalizeNativeValue(v: string): string | null;
}
