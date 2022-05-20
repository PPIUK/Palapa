import { ShortMergeRequest } from '../ShortMergeRequest';
import { ShortCSSPropertyValidator } from './ShortCSSPropertyValidator';
import { CSSPropertyValidatorParams, CSSPropertyModel } from './types';
/**
 * Flex shorthand property in CSS and React Native differ significantly. This
 * validator must therefore expand this shorthand in a way consistent with the
 * specs for both platforms (native and CSS).
 */
export declare class ShortFlexCSSPropertyValidator extends ShortCSSPropertyValidator<CSSPropertyModel, number> {
    constructor(params: CSSPropertyValidatorParams<CSSPropertyModel>);
    normalizeInlineCSSValue(value: string): ShortMergeRequest;
    /**
     * In React Native, "flex" is not a shorthand property, although it looks
     * like one. There is not always a tuple of (flexGrow, flexShrink,
     * flexBasis) that maps exactly to one single "flex" value.
     *
     * For this very reason, it is ill-advised to use "flex" shorthand property.
     * Use the longhand equivalent when that is possible.
     *
     * @param value
     */
    normalizeNativeValue(value: number): number;
}
