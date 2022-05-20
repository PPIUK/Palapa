import { GenericCSSPropertyValidator } from './GenericPropertyValidator';
import { CSSPropertyValidatorParams, CSSPropertyModel } from './types';
export declare abstract class LongCSSPropertyValidator<C extends CSSPropertyModel = any, N = any> extends GenericCSSPropertyValidator<C> {
    constructor(params: CSSPropertyValidatorParams<C>);
    /**
     * Normalize a rule value from inline CSS styles.
     *
     * @param value - The CSS property value to test.
     * @returns The normalized value, or null if normalization failed.
     */
    normalizeInlineCSSValue(value: N | string): N | null;
    abstract normalizeRawInlineCSSValue(value: string): N | null;
    /**
     * Normalize a mixed value from a @{link MixedStyleDeclaration}.
     *
     * @param value
     */
    normalizeNativeValue(value: N): N | null;
}
