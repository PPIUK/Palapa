import { ShortCSSToReactNativeValidator } from './ShortCSSToReactNativeValidator';
import { CSSPropertyModel } from './types';
import { ShortMergeRequest } from '../ShortMergeRequest';
export declare class ShortFontCSSValidator<C extends CSSPropertyModel> extends ShortCSSToReactNativeValidator<C> {
    normalizeInlineCSSValue(value: string): ShortMergeRequest | null;
}
