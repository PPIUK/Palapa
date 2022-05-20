import { LongCSSPropertyValidator } from './LongCSSPropertyValidator';
import { CSSPropertyModel } from './types';
export declare class LongFontFamilyPropertyValidator<C extends CSSPropertyModel> extends LongCSSPropertyValidator<C, string> {
    normalizeRawInlineCSSValue(value: string): string | null;
    normalizeNativeValue(value: string): string | null;
}
