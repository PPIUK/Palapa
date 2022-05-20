import { LongCSSPropertyValidator } from './LongCSSPropertyValidator';
import { CSSPropertyValidatorParams, CSSPropertyModel } from './types';
export declare class LongEnumerationListCSSPropertyValidator<C extends CSSPropertyModel> extends LongCSSPropertyValidator<C, string[]> {
    readonly allowedList: ReadonlyArray<string>;
    constructor(params: CSSPropertyValidatorParams<C>, allowedList: string[]);
    normalizeRawInlineCSSValue(value: string): string[] | null;
}
