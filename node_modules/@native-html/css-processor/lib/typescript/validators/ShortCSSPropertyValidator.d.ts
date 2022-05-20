import { ShortMergeRequest } from '../ShortMergeRequest';
import { GenericCSSPropertyValidator } from './GenericPropertyValidator';
import { CSSPropertyModel, ShortCSSPropertyValidatorParams } from './types';
export declare abstract class ShortCSSPropertyValidator<C extends CSSPropertyModel = any, N = any> extends GenericCSSPropertyValidator<C> {
    constructor(params: ShortCSSPropertyValidatorParams<C>);
    /**
     * Expand a CSS shorthand property to its longhand equivalent.
     *
     * @param value
     */
    abstract normalizeInlineCSSValue(value: string): ShortMergeRequest | null;
    /**
     * Expand a React Native shorthand property to its longhand equivalent.
     *
     * @param value
     */
    abstract normalizeNativeValue(value: N): ShortMergeRequest | N | null;
}
