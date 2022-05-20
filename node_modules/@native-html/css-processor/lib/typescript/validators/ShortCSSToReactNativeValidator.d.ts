import { ShortCSSPropertyValidator } from './ShortCSSPropertyValidator';
import { CSSPropertyModel } from './types';
import { ShortMergeRequest } from '../ShortMergeRequest';
export declare class ShortCSSToReactNativeValidator<C extends CSSPropertyModel = any> extends ShortCSSPropertyValidator<C> {
    normalizeInlineCSSValue(value: string): ShortMergeRequest | null;
    /**
     * Not supported on Native.
     * @param value
     */
    normalizeNativeValue(): null;
}
