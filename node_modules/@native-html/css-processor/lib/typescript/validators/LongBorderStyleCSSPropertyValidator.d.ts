import { LongEnumerationCSSPropertyValidator } from './LongEnumerationCSSPropertyValidator';
import { CSSPropertyModel } from './types';
export declare class LongBorderStyleCSSPropertyValidator<C extends CSSPropertyModel> extends LongEnumerationCSSPropertyValidator<C> {
    normalizeRawInlineCSSValue(value: string): string | null;
    normalizeNativeValue(value: string): string | null;
    pickFirst(value: string): string | null;
}
