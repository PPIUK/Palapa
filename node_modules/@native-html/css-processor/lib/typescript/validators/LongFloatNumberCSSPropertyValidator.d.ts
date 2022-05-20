import { LongCSSPropertyValidator } from './LongCSSPropertyValidator';
import { CSSPropertyModel } from './types';
export declare class LongFloatNumberCSSPropertyValidator<C extends CSSPropertyModel> extends LongCSSPropertyValidator<C, number> {
    normalizeRawInlineCSSValue(value: string): number | null;
    normalizeNativeValue(v: string | number): number | null;
}
