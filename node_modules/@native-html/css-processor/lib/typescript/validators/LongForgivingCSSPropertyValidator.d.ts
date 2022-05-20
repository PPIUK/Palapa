import { LongCSSPropertyValidator } from './LongCSSPropertyValidator';
import { CSSPropertyModel } from './types';
export declare class LongForgivingCSSPropertyValidator<C extends CSSPropertyModel> extends LongCSSPropertyValidator<C> {
    normalizeRawInlineCSSValue(value: string): string | null;
}
