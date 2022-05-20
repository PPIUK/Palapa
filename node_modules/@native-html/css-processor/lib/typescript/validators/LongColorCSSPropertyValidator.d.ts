import { LongForgivingCSSPropertyValidator } from './LongForgivingCSSPropertyValidator';
import { CSSPropertyModel } from './types';
export declare class LongColorCSSPropertyValidator<C extends CSSPropertyModel> extends LongForgivingCSSPropertyValidator<C> {
    normalizeRawInlineCSSValue(value: string): string | null;
}
