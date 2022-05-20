import { LongCSSPropertyValidator } from './LongCSSPropertyValidator';
import { CSSPropertyModel } from './types';
export declare class LongAspectRatioPropertyValidator<C extends CSSPropertyModel> extends LongCSSPropertyValidator<C, number> {
    normalizeRawInlineCSSValue(value: string): number | null;
    normalizeNativeValue(value: string | number): number | null;
}
