import { LongNonPercentSizeCSSPropertyValidator } from './LongNonPercentSizeCSSPropertyValidator';
import { CSSPropertyModel } from './types';
export declare class LongBorderWidthCSSPropertyValidator<C extends CSSPropertyModel> extends LongNonPercentSizeCSSPropertyValidator<C> {
    normalizeRawInlineCSSValue(value: string): string | number | null;
    normalizeNativeValue(value: string | number): string | number | null;
}
